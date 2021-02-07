var SurveyPanel = React.createClass({displayName: "SurveyPanel",
  numberOnly: function(e){
    var keyCode = e.which || e.keyCode;
    if(keyCode > 57 || keyCode < 48 && keyCode != 8 && keyCode != 46) e.preventDefault();
  },
  getInitialState: function() {
     return {marginTop: this.props.mobile ? '50px' : '70px'};
   },
  render: function() {
    return (
        React.createElement("div", {className: "modal-dialog", role: "document", style: {width: '450px', marginTop: this.state.marginTop}}, 
            React.createElement("button", {type: "button", className: "close close_modal", dataDismiss: "modal", ariaLabel: "Close", onClick: this.props.close}, 
                React.createElement("img", {src: "/static/img/profile/close.png"})
            ), 
            React.createElement("div", {className: "bg border", style: {padding: '10px 25px 0 25px'}, id: 'survey_border'}, 
                React.createElement("div", {style: {margin: '10px'}}, 
                    
                        this.props.register ?
                        React.createElement("h2", {style: {textAlign: 'center', marginBottom: '20px'}, className: "title_style"}, this.props.i18n('Register'))
                        :
                        React.createElement("h2", {style: {textAlign: 'center', marginBottom: '20px'}, className: "title_style"}, this.props.i18n('Stay Tuned!')), 
                    
                    
                        this.props.register ?
                        null
                        :
                        React.createElement("p", {style: { margin:'0 0 20px'}}, this.props.i18n('We are now under controlled public beta and will be providing services to your area soon! Share your information with us to stay updated with the latest news from us. Stay un-phished and thank you for choosing us!'))
                    
                ), 
                React.createElement("div", {id: "survey_name"}, 
                    React.createElement("div", {className: "border green_border", style: {height: '44px', width: '214px', verticalAlign: 'top', display: 'inline-block',
                         marginRight: '10px'}}, 
                        React.createElement("div", {className: "icon icon-ID_icon", style: {margin: '7px 10px'}}
                        ), 
                        React.createElement("div", {className: "slash"}), 
                        React.createElement("input", {id: "survey_first_name", name: "first_name", className: "form_input", placeholder: this.props.i18n('First Name')})
                    ), 
                    React.createElement("div", {className: "border green_border", style: {height: '44px', width: '170px', textAlign: 'center',
                        verticalAlign: 'top', display: 'inline-block'}}, 
                        React.createElement("input", {id: "survey_last_name", name: "last_name", style: {border: 0, verticalAlign: 'top', height: '42px',
                         width: '90%'}, placeholder: this.props.i18n('Last Name')})
                    )
                ), 
                React.createElement("div", {style: {margin: '20px'}}
                ), 
                React.createElement("div", {className: "border green_border", style: {height: '44px', width: '400px', verticalAlign: 'top', display: 'inline-block'}}, 
                    React.createElement("div", {className: "icon icon-mail", style: {margin: '7px 10px'}}
                    ), 
                    React.createElement("div", {className: "slash"}), 
                    React.createElement("input", {id: "survey_email", className: "form_input", type: "text", name: "email", placeholder: this.props.i18n('E-mail Address'), 
                    ariaDescribedby: "sizing-addon1"})
                ), 
                
                    this.props.register ?
                    React.createElement("div", {style: {margin: '20px'}}
                    )
                    :
                    null, 
                
                
                    this.props.register ?
                    React.createElement("div", {className: "border green_border", style: {height: '44px', width: '400px', verticalAlign: 'top', display: 'inline-block'}}, 
                        React.createElement("div", {className: "icon icon-KEY_icon", style: {margin: '7px 10px'}}
                        ), 
                        React.createElement("div", {className: "slash"}), 
                        React.createElement("input", {id: "survey_password", className: "form_input", type: "text", name: "password", placeholder: this.props.i18n('Password'), 
                        ariaDescribedby: "sizing-addon1"})
                    )
                    :
                    null, 
                
                React.createElement("div", {style: {margin: '20px'}}
                ), 
                React.createElement("div", {className: "border green_border", style: {height: '44px', width: '400px', verticalAlign: 'top', display: 'inline-block'}}, 
                    React.createElement("div", {className: "icon icon-company_name_icon", style: {margin: '7px 10px'}}
                    ), 
                    React.createElement("div", {className: "slash"}), 
                    React.createElement("input", {id: "survey_company_name", className: "form_input", type: "text", name: "company_name", placeholder: this.props.i18n("Company Name"), 
                     ariaDescribedby: "sizing-addon1"})
                ), 
                React.createElement("div", {style: {margin: '20px'}}
                ), 
                React.createElement("div", {className: "border green_border", style: {height: '44px', width: '400px', verticalAlign: 'top', display: 'inline-block'}}, 
                    React.createElement("div", {className: "icon icon-departmenticon", style: {margin: '7px 10px'}}
                    ), 
                    React.createElement("div", {className: "slash"}), 
                    React.createElement("input", {id: "survey_department", className: "form_input", type: "text", name: "department", placeholder: this.props.i18n("Department"), ariaDescribedby: "sizing-addon1"})
                ), 
                React.createElement("div", {style: {margin: '20px'}}
                ), 
                React.createElement("div", {className: "border", style: {height: '44px', width: '400px', verticalAlign: 'top', display: 'inline-block'}}, 
                    React.createElement("div", {className: "icon icon-country_icon", style: {margin: '7px 10px'}}
                    ), 
                    React.createElement("div", {className: "slash"}), 
                    React.createElement("select", {name: "country", id: "survey_country_list", className: "form_select", style: {    width: 'calc(100% - 75px)'}}, 
                        React.createElement("option", {value: "-1"}, this.props.i18n("Country"))
                    ), 
                    React.createElement("i", {className: "fa fa-caret-down select_arrow_icon"})
                ), 
                React.createElement("div", {style: {margin: '20px'}}
                ), 
                React.createElement("div", {className: "border green_border", style: {height: '44px', width: '400px', verticalAlign: 'top', display: 'inline-block'}}, 
                    React.createElement("div", {className: "icon icon-mobile_icon", style: {margin: '7px 10px'}}
                    ), 
                    React.createElement("div", {className: "slash"}), 
                    React.createElement("input", {id: "survey_mobilephone", className: "form_input", type: "text", name: "phone", placeholder: this.props.mobile ? this.props.i18n("ex: 886987026316") : this.props.i18n("Mobile Phone Number"), 
                        ariaDescribedby: "sizing-addon1", onKeyPress: this.numberOnly}
                    )
                ), 
                React.createElement("div", {style: {margin: '20px'}}
                ), 
                React.createElement("div", {className: "border green_border", style: {height: '44px', width: '400px', verticalAlign: 'top', display: 'inline-block'}}, 
                    React.createElement("div", {className: "icon icon-number_of_employees_icon", style: {margin: '7px 10px'}}
                    ), 
                    React.createElement("div", {className: "slash"}), 
                    React.createElement("select", {id: "survey_number_of_employees", name: "number_of_employees", className: "form_select", style: {    width: 'calc(100% - 75px)'}}, 
                        React.createElement("option", {value: "-1", style: {color: "grey"}}, this.props.i18n("Number of Employees")), 
                        React.createElement("option", {value: "1"}, "1-100"), 
                        React.createElement("option", {value: "2"}, "101-1000"), 
                        React.createElement("option", {value: "3"}, "1000+")
                    ), 
                    React.createElement("i", {className: "fa fa-caret-down select_arrow_icon"})
                ), 
                React.createElement("div", {style: {margin: '20px'}}
                ), 
                React.createElement("div", {className: "border", style: {height: '44px', width: '400px', verticalAlign: 'top', display: 'inline-block'}}, 
                    React.createElement("div", {className: "icon icon-industry_icon", style: {margin: "7px 10px"}}
                    ), 
                    React.createElement("div", {className: "slash"}), 
                    React.createElement("select", {id: "survey_industry", name: "industry", className: "form_select", style: {    width: 'calc(100% - 75px)'}}, 
                        React.createElement("option", {value: "-1", style: {color: 'grey'}}, this.props.i18n("Industry")), 
                        React.createElement("option", {value: "101"}, this.props.i18n("industry_101")), 
                        React.createElement("option", {value: "102"}, this.props.i18n("industry_102")), 
                        React.createElement("option", {value: "103"}, this.props.i18n("industry_103")), 
                        React.createElement("option", {value: "104"}, this.props.i18n("industry_104")), 
                        React.createElement("option", {value: "105"}, this.props.i18n("industry_105")), 
                        React.createElement("option", {value: "106"}, this.props.i18n("industry_106")), 
                        React.createElement("option", {value: "107"}, this.props.i18n("industry_107")), 
                        React.createElement("option", {value: "108"}, this.props.i18n("industry_108")), 
                        React.createElement("option", {value: "109"}, this.props.i18n("industry_109")), 
                        React.createElement("option", {value: "110"}, this.props.i18n("industry_110")), 
                        React.createElement("option", {value: "111"}, this.props.i18n("industry_111")), 
                        React.createElement("option", {value: "112"}, this.props.i18n("industry_112")), 
                        React.createElement("option", {value: "113"}, this.props.i18n("industry_113")), 
                        React.createElement("option", {value: "114"}, this.props.i18n("industry_114")), 
                        React.createElement("option", {value: "115"}, this.props.i18n("industry_115")), 
                        React.createElement("option", {value: "116"}, this.props.i18n("industry_116")), 
                        React.createElement("option", {value: "117"}, this.props.i18n("industry_117")), 
                        React.createElement("option", {value: "118"}, this.props.i18n("industry_118")), 
                        React.createElement("option", {value: "119"}, this.props.i18n("industry_119")), 
                        React.createElement("option", {value: "120"}, this.props.i18n("industry_120")), 
                        React.createElement("option", {value: "121"}, this.props.i18n("industry_121")), 
                        React.createElement("option", {value: "122"}, this.props.i18n("industry_122")), 
                        React.createElement("option", {value: "123"}, this.props.i18n("industry_123")), 
                        React.createElement("option", {value: "124"}, this.props.i18n("industry_124")), 
                        React.createElement("option", {value: "125"}, this.props.i18n("industry_125")), 
                        React.createElement("option", {value: "126"}, this.props.i18n("industry_126")), 
                        React.createElement("option", {value: "127"}, this.props.i18n("industry_127")), 
                        React.createElement("option", {value: "128"}, this.props.i18n("industry_128")), 
                        React.createElement("option", {value: "129"}, this.props.i18n("industry_129")), 
                        React.createElement("option", {value: "130"}, this.props.i18n("industry_130")), 
                        React.createElement("option", {value: "132"}, this.props.i18n("industry_132")), 
                        React.createElement("option", {value: "133"}, this.props.i18n("industry_133")), 
                        React.createElement("option", {value: "134"}, this.props.i18n("industry_134")), 
                        React.createElement("option", {value: "136"}, this.props.i18n("industry_136")), 
                        React.createElement("option", {value: "137"}, this.props.i18n("industry_137")), 
                        React.createElement("option", {value: "138"}, this.props.i18n("industry_138")), 
                        React.createElement("option", {value: "139"}, this.props.i18n("industry_139")), 
                        React.createElement("option", {value: "140"}, this.props.i18n("industry_140")), 
                        React.createElement("option", {value: "141"}, this.props.i18n("industry_141")), 
                        React.createElement("option", {value: "142"}, this.props.i18n("industry_142")), 
                        React.createElement("option", {value: "143"}, this.props.i18n("industry_143")), 
                        React.createElement("option", {value: "144"}, this.props.i18n("industry_144")), 
                        React.createElement("option", {value: "145"}, this.props.i18n("industry_145")), 
                        React.createElement("option", {value: "146"}, this.props.i18n("industry_146"))
                    ), 
                    React.createElement("i", {className: "fa fa-caret-down select_arrow_icon"})
                ), 
                React.createElement("div", {style: {margin: '20px'}}
                ), 
                React.createElement("div", {style: {marginBottom: '20px', }}, 
                    React.createElement("button", {className: "primary_button", style: {width: "100%"}, type: "button", onClick: this.props.next}, this.props.i18n('Done')), 
                    React.createElement("p", {style: {textAlign: 'right', margin: '20px 0 20px'}}, this.props.i18n('Already have an account?'), React.createElement("a", {style:{color: '#48AFFF'}, onClick: this.props.goSignIn}, this.props.i18n('Sign In')))
                )
            )
        )
    );
  }
});

