import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useMemo, useEffect } from "react";
import {getSession, signOut, useSession} from 'next-auth/react'
import {
  ArticleIcon,
  CollapsIcon,
  HomeIcon,
  LogoIcon,
  LogoutIcon,
  UsersIcon,
  VideosIcon,
} from "./icons";

const menuItems = [
  { id: 1, label: "Home", icon: HomeIcon, link: "/" },
  { id: 2, label: "Demande de stage", icon: ArticleIcon, link: "/Student/demande_stage" },
  { id: 3, label: "RemplissageC_charge", icon: UsersIcon, link: "/Student/RemplissageC_charge" },
  { id: 4, label: "Crée CV", icon: UsersIcon, link: "/cv/steptwo" },
  // { id: 4, label: "Manage Tutorials", icon: VideosIcon, link: "/tutorials" },
];

export default function SideBar({user =[], prof=[]}){
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);


  // async function onSubmit() {
  //   const options = {
  //     method: 'POST',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify(user)
  //   }
  //   console.log(user)

  //   await fetch('http://localhost:3000/api/auth/signup', options)
  //     .then(res=> res.json())
  //     .then((data)=>{
  //       // alert("Account created")
  //       // console.log('heyyyyyyyyyyyyyyyyyyyyyy')
  //       // if(data) router.push('/login')
  //     })
  // }
  async function onSubmit(values) {
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(values)
    }

    await fetch('http://localhost:3000/api/auth/signup', options)
      .then(res=> res.json())
      .then((data)=>{
        // alert("Account created")
        // if(data) router.push('/login')
      })
  }

  const {data:session} = useSession()
  if(user.length <1) {
    console.log('not user')
    console.log()
    // useEffect(() => {
      session &&onSubmit({...session.user, "role": "user"})
    // }, [])
  }
  // console.log("use effect")





  session && console.log(session.user)

// window.localStorage.setItem(
//     'user_id',
//     JSON.stringify({
//         unique_id: prof[0]._id,
//     }),
// )
// console.log(localStorage)

  //Check if is Admin
  const isAdmin =  user.length>0
  // console.log(isAdmin)

  const router = useRouter();


  const activeMenu = useMemo(() => menuItems.find((menu) => menu.link === router.pathname),
    [router.pathname]
  );

  const wrapperClasses = classNames(
    "h-screen px-4 pt-8 pb-4 bg-light flex justify-between flex-col ",
    {
      ["w-80"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );

  const collapseIconClasses = classNames(
    "p-4 rounded bg-light-lighter absolute right-0",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const getNavItemClasses = (menu) => {
    return classNames(
      "flex items-center  cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
      {
        // ["bg-light-lighter "]: activeMenu.id === menu.id,
      }
    );
  };

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  // Google Sign OUt
  async function handlerSignOut(){
    await router.push('/')
    localStorage.clear();
    signOut()
  }

  return (
    <div
      className={`${wrapperClasses} `}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}

    >
      <div className="flex flex-col ">
        <div className="flex items-center justify-between relative ">
          <div className="flex items-center pl-1 gap-4 ">
            <LogoIcon />

            <span
              className={classNames("mt-2 text-lg font-medium text-text", {
                hidden: toggleCollapse,
              })}
            >
              Etudiant:
            </span>
          </div>
          {isCollapsible && (
            <button
              className={collapseIconClasses}
              onClick={handleSidebarToggle}
            >
              <CollapsIcon />
            </button>
          )}
        </div>

        <div className="flex flex-col items-start mt-24 ">
          {menuItems.map(({ icon: Icon, ...menu }) => {
            const classes = getNavItemClasses(menu);
            return (
              <div className={classes} key={menu.id}>
                <Link href={menu.link} legacyBehavior>
                  <a className="flex py-4 px-3 items-center w-full h-full">
                    <div style={{ width: "2.5rem" }}>
                      <Icon />
                    </div>
                    {!toggleCollapse && (
                      <span
                        className={classNames(
                          "text-md font-medium text-text-light"
                        )}
                      >
                        { menu.label}
                      </span>
                    )}
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className={`${getNavItemClasses({})} px-3 py-4`}>
        <div style={{ width: "2.5rem" }}>
          <LogoutIcon />
        </div>
        {!toggleCollapse && (
          <span className={classNames("text-md font-medium text-text-light")} onClick={handlerSignOut }>
            Logout
          </span>
        )}
      </div>
    </div>
  );
};

// export default Sidebar;


export async function getServerSideProps({req}) {
  const session = await getSession({req})
  const res = await fetch('http://localhost:3000/api/auth/fetchAdmin');
  console.log(session)
  const data = await res.json();
  if(!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false

      }
    }
  }
  return {
    props: {
      session,
      data
    }
  }
}
