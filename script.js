let pass_s = 0;
const texte =
[
    "",
    "Passwort zu schwach",
    "Passwort okay",
    "Passwort stark",
    "Passwort extrem stark"
]
const farben =
[
    "rgb(235, 154, 104)",
    "rgb(235, 154, 104)",
    "rgb(197, 145, 2)",
    "rgb(74, 197, 2)",
    "rgb(2, 109, 197)"
]

let pass, eMail;
let correctMail = "basak@gmail.com";
let correctPass = "123";


const app = new Vue(
    {
    el: "#app",
    data:
    {
        selected: "English",
        step:1,
        title1: "Sign in",
        input1_title: "Username",
        input1_data: "",
        input2_title: "Password",
        input2_data: "",
        checkBox: "Remember me",
        forgot: "Forgot Password",
        btn: "Sign in",
        info: "",
        info_pass: "",
        linksTitle:"or sign in with",
        member: "Dont have an account?",
        member_link: "Sign Up",
        show: true,
        SignUpShow: true,
        
        
            passwort: "",
            farbe: "color: " + farben[0]
        
    },
        methods: {
            showLang: function ()
            {
                if (this.selected == "Deutsch")
                {
                    this.title1 = "Einloggen";
                    this.input1_title = "Benutzername";
                    this.input1_data = "";
                    this.input2_title = "Passwort";
                    this.input2_data = "";
                    this.checkBox = "Angemeldet bleiben";
                    this.forgot = "Passwort vergessen";
                    this.btn = "Einloggen";
                    this.info= "";
                    this.linksTitle="oder einloggen mit",
                    this.member = "Sie haben kein Konto?";
                    this.member_link = "Account erstellen";
                }
                else if (this.selected == "English")
                {
                   
                    this.title1 = "Sign in";
                    this.input1_title = "Username";
                    this.input1_data = "";
                    this.input2_title = "Password";
                    this.input2_data = "";
                    this.checkBox = "Remember me";
                    this.forgot = "Forgot Password";
                    this.btn = "Sign in";
                    this.info= "";
                    this.linksTitle= "or sign in with";
                    this.member = "Dont have an account?";
                    this.member_link = "Sign Up";
                
            }
              
            },

            sign: function () {
                
                
                if (this.input1_data == "" || this.input2_data == "")
                {
                    if (this.selected == "Deutsch")
                    {
                        
                        this.info = "** Bitte E-Mail-Adresse and Passwort eingeben.";
                        return;
                    }
                    else
                    {
                        this.info = "** Please enter your e-mail and password.";
                    return;
                        
                    }
                    
                    
                }
                else
                {
                    eMail = this.input1_data;
                    pass = this.input2_data;

                    if(eMail == correctMail && pass == correctPass)
                    {
                        if (this.selected == "Deutsch") {
                        
                            this.info = "Herzlichen Willkommen";
                           
                        }
                        else
                        {
                            this.info = "Wellcome.";
                       
                            
                        }
                        

                       
                    }
                    else
                        {
                        
                    if (this.selected == "Deutsch") {
                                        
                        this.info = "** Falsche Daten eingegeben";
                    
                    }
                    else
                    {
                        this.info = "** Data is false";
                
                        
                    }

                                       
                }
                                
            }



            },
            signUp: function () {
                
                this.show = false;
                this.SignUpShow = false;
            
                
                if (this.selected == "Deutsch") {
                                        
                    this.title1 = "Account erstellen";
                    this.input1_title = "E-mail Addresse";
                    this.input1_data = "";
                    this.input2_title = "Passwort";
                    this.input2_data = "";
                    this.checkBox = "Ich acceptrire Datenshutz";
                    this.forgot = "";
                    this.btn = "Registrieren";
                    this.info= "";
                    this.linksTitle="",
                    this.member = "";
                    this.member_link = "";
                    
                

                }
                else if(this.selected == "English")
                {
                    this.title1 = "Sign Up";
                    this.input1_title = "E-mail addres";
                    this.input1_data = "";
                    this.input2_title = "Password";
                    this.input2_data = "";
                    this.checkBox = "I accept Privicy";
                    this.forgot = "";
                    this.btn = "Sign Up";
                    this.info= "";
                    this.linksTitle= "";
                    this.member = "";
                    this.member_link = "";

                }


                





            },
            passCheck: function()
            {
                
                pass_s = 0;

                // enthält kleine Buchstaben
                if(this.input2_data.match(/[a-z]/))
                {
                    pass_s++;
                }

                // enthält Zahlen
                if(this.input2_data.match(/[0-9]/))
                {
                    pass_s++;
                }

                //enthält große Buchstaben
                if(this.input2_data.match(/[A-Z]/))
                {
                    pass_s++;
                }

                // enthält spezielle Zeichen
                if(this.input2_data.match(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/))
                {
                    pass_s++;
                }


                if(pass_s > 1 && this.input2_data.length < 5)
                {
                    pass_s--;
                }
                
                this.info_pass = texte[pass_s];
                this.farbe = "color: " + farben[pass_s];


            }

           
        
        
        

        
    }





})