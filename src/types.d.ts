import {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";
declare const tables: readonly [
  {
    readonly name: "users";
    readonly columns: readonly [
      {
        readonly name: "email";
        readonly type: "email";
        readonly unique: true;
      },
      {
        readonly name: "password";
        readonly type: "string";
      },
      {
        readonly name: "username";
        readonly type: "string";
      }
    ];
  },
  {
    readonly name: "cv";
    readonly columns: readonly [
      {
        readonly name: "Full_name";
        readonly type: "string";
      },
      {
        readonly name: "Email";
        readonly type: "string";
      },
      {
        readonly name: "Address";
        readonly type: "string";
      },
      {
        readonly name: "Phone_number";
        readonly type: "string";
      },
      {
        readonly name: "Role";
        readonly type: "string";
      },
      {
        readonly name: "Profile_Photo_Url";
        readonly type: "string";
      },
      {
        readonly name: "Public_id";
        readonly type: "string";
      },
      {
        readonly name: "user";
        readonly type: "string";
      },
      {
        readonly name: "unique_id";
        readonly type: "string";
      },
      {
        readonly name: "Job_Title_Ex";
        readonly type: "string";
      },
      {
        readonly name: "City_town_Ex";
        readonly type: "string";
      },
      {
        readonly name: "Employer_Ex";
        readonly type: "string";
      },
      {
        readonly name: "Start_date_ex";
        readonly type: "string";
      },
      {
        readonly name: "End_Date_Ex";
        readonly type: "string";
      },
      {
        readonly name: "Achievement_one_Ex";
        readonly type: "string";
      },
      {
        readonly name: "Achievement_two_Ex";
        readonly type: "string";
      },
      {
        readonly name: "Achievement_three_Ex";
        readonly type: "string";
      },
      {
        readonly name: "Degree_Ed";
        readonly type: "string";
      },
      {
        readonly name: "City_Ed";
        readonly type: "string";
      },
      {
        readonly name: "School_Ed";
        readonly type: "string";
      },
      {
        readonly name: "Start_date_Ed";
        readonly type: "string";
      },
      {
        readonly name: "End_date_Ed";
        readonly type: "string";
      },
      {
        readonly name: "Award_one_Ed";
        readonly type: "string";
      },
      {
        readonly name: "Award_two_Ed";
        readonly type: "string";
      },
      {
        readonly name: "Award_three_Ed";
        readonly type: "string";
      },
      {
        readonly name: "Hobby";
        readonly type: "string";
      },
      {
        readonly name: "Company_name_Rfx";
        readonly type: "string";
      },
      {
        readonly name: "Contact_person_Rfx";
        readonly type: "string";
      },
      {
        readonly name: "Phone_number_Rfx";
        readonly type: "string";
      },
      {
        readonly name: "Email_Address_Rfx";
        readonly type: "string";
      },
      {
        readonly name: "Skill";
        readonly type: "string";
      },
      {
        readonly name: "Level_sk";
        readonly type: "string";
      },
      {
        readonly name: "Cert_Img_one_url";
        readonly type: "string";
      },
      {
        readonly name: "Cert_Img_two_url";
        readonly type: "string";
      },
      {
        readonly name: "Language";
        readonly type: "string";
      },
      {
        readonly name: "Cert_Public_Id";
        readonly type: "string";
      }
    ];
  }
];
export declare type SchemaTables = typeof tables;
export declare type InferredTypes = SchemaInference<SchemaTables>;
export declare type Users = InferredTypes["users"];
export declare type UsersRecord = Users & XataRecord;
export declare type BasicInfo = InferredTypes["cv"];
export declare type BasicInfoRecord = BasicInfo & XataRecord;
export declare type DatabaseSchema = {
  users: UsersRecord;
  basic_info: BasicInfoRecord;
};
declare const DatabaseClient: any;
export declare class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions);
}
export declare const getXataClient: () => XataClient;
export {};
