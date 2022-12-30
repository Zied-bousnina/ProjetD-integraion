import {Schema, model, models} from 'mongoose'

const cvSchema = new Schema( {
                                Full_name: String,
                                Email: String,
                                Role: String,
                                Phone_number: String,
                                Address: String,
                                Profile_Photo_Url: String,
                                Public_id: String,
                                unique_id: String,
                                Job_Title_Ex: String,
                                City_town_Ex: String,
                                Employer_Ex: String,
                                Start_date_ex: String,
                                End_Date_Ex: String,
                                Achievement_one_Ex: String,
                                Achievement_two_Ex: String,
                                Achievement_three_Ex: String,
                                Degree_Ed: String,
                                City_Ed: String,
                                School_Ed: String,
                                Start_date_Ed: String,
                                End_date_Ed: String,
                                Award_one_Ed: String,
                                Award_two_Ed: String,
                                Award_three_Ed: String,
                                Hobby: String,
                                Company_name_Rfx: String,
                                Contact_person_Rfx: String,
                                Phone_number_Rfx: String,
                                Email_Address_Rfx: String,
                                Skill: String,
                                Level_sk: String,
                                Cert_Img_one_url: String,
                                Language: String,
                                Cert_Public_Id: String,

})

const Cv = models.cv|| model('cv', cvSchema)

export default Cv