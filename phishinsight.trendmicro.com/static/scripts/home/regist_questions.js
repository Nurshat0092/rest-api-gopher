var _RegistQuestionPanel = null;

var RegistQuestionPanel = React.createClass({displayName: "RegistQuestionPanel",
 getInitialState: function() {
    _RegistQuestionPanel = this;
    marginTop = this.props.mobile ? '50px' : '70px';
    return {answer_states: [null, null, null, null, null], has_no: false, marginTop:marginTop};
  },
  handleChange: function(question_index){
      return function(){
      var answer_states = _RegistQuestionPanel.state.answer_states;
      answer_states[question_index - 1] = document.getElementById(question_index + '_no').checked;
      _RegistQuestionPanel.setState({answer_states: answer_states});
      if(answer_states.indexOf(true) == -1)
          _RegistQuestionPanel.setState({has_no: false});
      else
          _RegistQuestionPanel.setState({has_no: true});
    }
  },
  render: function() {
    return (
        React.createElement("div", {className: "modal-dialog", role: "document", style: {width: '450px', marginTop: this.state.marginTop}}, 
            React.createElement("button", {type: "button", className: "close close_modal", dataDismiss: "modal", ariaLabel: "Close", onClick: this.props.close}, 
                React.createElement("img", {src: "/static/img/profile/close.png"})
            ), 
            React.createElement("div", {className: "bg border", style: {padding:'30px', marginBottom: '20px'}}, 
                React.createElement("div", null, 
                    React.createElement("h2", {style: {fontWeight:300,margin:0}}, this.props.i18n('Thanks for Choosing Us!')), 
                    React.createElement("p", {style: {margin: '20px 0'}}, this.props.i18n('Here are some simple questions that can help us understand more about you and your organization.')), 
                    React.createElement("div", {style: {height: '400px', backgroundColor: 'white', textAlign: 'left', borderRadius: '4px', overflowY: 'scroll',
                        borderStyle: 'solid', borderColor: '#c7c7c7', borderWidth: '1px', padding: '20px'}}, 
                        React.createElement("table", null, 
                            React.createElement("tbody", null, 
								React.createElement("tr", null, 
									React.createElement("td", null, "Q1."
									), 
									React.createElement("td", null, 
									this.props.i18n('Q1')
									)
								)
                            )
                        ), 
                        React.createElement("table", {style: {marginBottom: '20px'}}, 
                            React.createElement("tbody", null, 
                                React.createElement("tr", null, 
									React.createElement("td", {style: {width:'23px'}}
									), 
                                    React.createElement("td", {className: "answer"}, 
										React.createElement("div", {className: "answer_radio"}, 
											React.createElement("input", {className: "answer_yes", id: "1_yes", type: "radio", name: "q1", value: "1_yes", onChange: this.handleChange(1)}), 
											React.createElement("label", {htmlFor: "1_yes"}, this.props.i18n('Yes')), 
											React.createElement("div", {className: "check"}
											)
										)
                                    ), 
                                    React.createElement("td", {className: "answer"}, 
										React.createElement("div", {className: "answer_radio"}, 
											React.createElement("input", {className: "answer_no", id: "1_no", type: "radio", name: "q1", value: "1_no", onChange: this.handleChange(1)}), 
											React.createElement("label", {htmlFor: "1_no"}, this.props.i18n('No')), 
											React.createElement("div", {className: "check"}
											)
										)
                                    )
                                )
                            )
                        ), 
                        React.createElement("table", null, 
                            React.createElement("tbody", null, 
								React.createElement("tr", null, 
									React.createElement("td", null, "Q2."
									), 
									React.createElement("td", null, 
									this.props.i18n('Q2')
									)
								)
                            )
                        ), 
                        React.createElement("table", {style: {marginBottom: '20px'}}, 
                            React.createElement("tbody", null, 
                                React.createElement("tr", null, 
									React.createElement("td", {style: {width:'23px'}}
									), 
                                    React.createElement("td", {className: "answer"}, 
										React.createElement("div", {className: "answer_radio"}, 
											React.createElement("input", {className: "answer_yes", id: "2_yes", type: "radio", name: "q2", value: "2_yes", onChange: this.handleChange(2)}), 
											React.createElement("label", {htmlFor: "2_yes"}, this.props.i18n('Yes')), 
											React.createElement("div", {className: "check"}
											)
										)
                                    ), 
                                    React.createElement("td", {className: "answer"}, 
										React.createElement("div", {className: "answer_radio"}, 
											React.createElement("input", {className: "answer_no", id: "2_no", type: "radio", name: "q2", value: "2_no", onChange: this.handleChange(2)}), 
											React.createElement("label", {htmlFor: "2_no"}, this.props.i18n('No')), 
											React.createElement("div", {className: "check"}
											)
										)
                                    )
                                )
                            )
                        )
                    )
                ), 
                React.createElement("div", {style: {}}, 
                    React.createElement("button", {className: "primary_button", style: {width: "100%",margin:'20px 0'}, type: "button", onClick: this.props.next}, this.props.i18n('Continue')), 
                    React.createElement("p", {style: {textAlign: 'right',margin:0}}, this.props.i18n('Already have an account?'), React.createElement("a", {onClick: this.props.goSignIn}, this.props.i18n('Sign In')))
                )
            ), 
             this.state.has_no == true?
                React.createElement(MsgBox, {msg_type: "warning", content: "NotProvideService", i18n: this.props.i18n})
              :
                 null
            
        )
    );
  }
});

