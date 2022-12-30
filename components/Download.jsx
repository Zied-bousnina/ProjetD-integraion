import React, { useContext, useState } from "react";
import Previewstyle from "../styles/Preview.module.css";
import { useRouter } from "next/router";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { useEffect } from "react";

const Download = React.forwardRef((props, ref) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [alldata, setAlldata] = useState();

  const cld = new Cloudinary({
    cloud: {
      cloudName: "dcuafrhwc",
    },
  });

  useEffect(() => {
    let newObjectuser = JSON.parse(localStorage.getItem("user_id"));

    let UserDetails = JSON.parse(localStorage.getItem("user_details"));

    setLoading(false);

    router.replace("/cv/preview", undefined, { shallow: true });

    fetch(
      `http://localhost:3000/api/Cv/?unique_id=${localStorage.getItem(
        "unique_id"
      )}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((response) => {
        let Available_Id =
          newObjectuser.unique_id === undefined
            ? UserDetails.unique_id
            : newObjectuser.unique_id;

        setAlldata(response);

        JSON.stringify({
          steponedata: {
            Full_name: `${response?.Full_name}`,
            Email: `${response?.Email}`,
            Role: `${response?.Role}`,
            Phone_number: `${response?.Phone_number}`,
            Address: `${response?.Address}`,
            Profile_Photo_Url: `${response?.Profile_Photo_Url}`,
            Public_id: `${response?.Public_id}`,
            unique_id: `${response?.unique_id}`,
            profile_phot_public_id: `${response?.Public_id}`,
            img_url: `${response?.Profile_Photo_Url}`,
          },
          img_url: `${response?.Profile_Photo_Url}`,
          unique_id: `${response?.unique_id}`,
          profile_phot_public_id: `${response?.Public_id}`,
        });

        setLoading(true);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {!loading ? (
        <h1
          style={{
            marginTop: "40px",
          }}
        >
          loading....
        </h1>
      ) : (
        <div ref={ref}>
          return (
          <>
            <section className={Previewstyle.top_summary}>
              <section className={Previewstyle.right_details}>
                <div className={Previewstyle.full_nameandrole}>
                  <div className={Previewstyle.fullname}>
                    <h1>{alldata?.Full_name}</h1>
                  </div>

                  <div className={Previewstyle.role}>
                    {" "}
                    <h2>{alldata?.Role}</h2>
                  </div>
                </div>

                <div className={Previewstyle.titleandcontacts}>
                  <div className={Previewstyle.contacts}>
                    <div className={Previewstyle.mobile}>
                      <div>
                        <BsFillTelephoneFill />
                      </div>
                      <div>{alldata?.Phone_number}</div>
                    </div>

                    <div className={Previewstyle.email}>
                      <div>
                        <MdOutlineAlternateEmail />
                      </div>
                      <div>{alldata?.Email}</div>
                    </div>

                    <div className={Previewstyle.address}>
                      <div>
                        <CiLocationOn />
                      </div>
                      <div>{alldata?.Address}</div>
                    </div>
                  </div>
                </div>
              </section>

              <section className={Previewstyle.top_img}>
                <AdvancedImage
                  cldImg={cld
                    .image(`${alldata?.Public_id}`)
                    .resize(
                      fill()
                        .width(100)
                        .height(100)
                        .gravity(focusOn(FocusOn.faces()))
                    )}
                />
              </section>
            </section>

            <section className={Previewstyle.skills_section}>
              <h1>Skills</h1>

              <ul className={Previewstyle.skills_items}>
                <li key={alldata?.Skill}>{alldata?.Skill}</li>
              </ul>
            </section>

            <section className={Previewstyle.skills_section}>
              <h1 className={Previewstyle.title}>Experience</h1>

              <div className={Previewstyle.skills_items}>
                <h1>
                  <span className={Previewstyle.sub_title}>
                    {alldata?.Employer_Ex}, {alldata?.City_town_Ex}
                  </span>{" "}
                  <span className={Previewstyle?.inner_sub_title}>
                    {" "}
                    - {alldata?.Role}
                  </span>
                </h1>

                <ol className={Previewstyle.skills_items}>
                  <li key={alldata?.Achievement_one_Ex}>
                    {alldata?.Achievement_one_Ex}
                  </li>
                  <li key={alldata?.Achievement_two_Ex}>
                    {alldata?.Achievement_two_Ex}
                  </li>
                  <li key={alldata?.Achievement_three_Ex}>
                    {alldata?.Achievement_three_Ex}
                  </li>
                </ol>
              </div>
            </section>

            <section className={Previewstyle.skills_section}>
              <h1 className={Previewstyle.title}>Education</h1>

              <div className={Previewstyle.skills_items}>
                <h1 className={Previewstyle.date}>
                  {alldata?.Start_date_Ed} - {alldata?.End_date_Ed}
                </h1>
                <h2>
                  {alldata?.School_Ed}, {alldata?.City_Ed} -{" "}
                  {alldata?.Degree_Ed}
                </h2>
              </div>
            </section>

            <section className={Previewstyle.skills_section}>
              <h1 className={Previewstyle.title}>Awards</h1>

              <div className={Previewstyle.skills_items}>
                <ul className={Previewstyle.skills_items}>
                  <li key={alldata?.Award_one_Ed}>{alldata?.Award_one_Ed}</li>
                  <li key={alldata?.Award_two_Ed}>{alldata?.Award_two_Ed}</li>
                  <li key={alldata?.Award_three_Ed}>
                    {alldata?.Award_three_Ed}
                  </li>
                </ul>
              </div>
            </section>
            <section className={Previewstyle.skills_section}>
              <h1 className={Previewstyle?.title}>Interest</h1>

              <div className={Previewstyle?.skills_items}>
                <ul className={Previewstyle?.skills_items}>
                  <li key={alldata?.Hobby}>{alldata?.Hobby}</li>
                </ul>
              </div>
            </section>

            <section className={Previewstyle.skills_section}>
              <h1 className={Previewstyle.title}>Language(s)</h1>

              <div className={Previewstyle.skills_items}>
                <h2 className={Previewstyle.date}>{alldata?.Language}</h2>
              </div>
            </section>

            <section className={Previewstyle.skills_section}>
              <h1 className={Previewstyle.title}>Certificate</h1>

              <section className={Previewstyle.skills_section}>
                <AdvancedImage
                  cldImg={cld
                    .image(`${alldata?.Cert_Public_Id}`)
                    .resize(
                      fill()
                        .width(200)
                        .height(200)
                        .gravity(focusOn(FocusOn.faces()))
                    )}
                />
              </section>
            </section>

            <section className={Previewstyle.skills_section}>
              <h1 className={Previewstyle.title}>References</h1>

              <div className={Previewstyle.skills_items}>
                <h2>Company Name- {alldata?.Company_name_Rfx}</h2>
                <h2>Contact Person- {alldata?.Contact_person_Rfx}</h2>
                <h2>Phone Number- {alldata?.Phone_number_Rfx}</h2>
                <h2>Email Address- {alldata?.Email_Address_Rfx}</h2>
              </div>
            </section>
          </>
          );
        </div>
      )}
    </div>
  );
});

export default Download;
