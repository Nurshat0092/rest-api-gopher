// @parameter title: null(use default) or string
// @parameter content: string
// @parameter msg_type: 'warning', 'error', 'confirm', 'info'(default)
// @parameter height: '150px'(default)
// @parameter width: '450px'(default)

var info_icon_path = '/static/img/campaign/information_icon.png';
var info_color = '#5088ce';
var warning_icon_path = '/static/img/campaign/warning.png';
var warning_color = '#fd7419';
var error_icon_path = '/static/img/campaign/error.png';
var error_color = '#fc3a41';
var confirm_icon_path = '/static/img/campaign/confirm_icon.png';
var confirm_color = '#1abc93';

var MsgBox= React.createClass({displayName: "MsgBox",
  getInitialState: function() {
     if(this.props.title!= undefined)
        var title = this.props.title;
     else
        var title = null;
     switch(this.props.msg_type){
        case "warning":
          var icon_path = warning_icon_path;
          var color = warning_color;
          if(title == null)
            title = "Warning"
          break;
        case "error":
          var icon_path = error_icon_path;
          var color = error_color;
          if(title == null)
            title = "Error"
          break;
        case "confirm":
          var icon_path = confirm_icon_path;
          var color = confirm_color;
          if(title == null)
            title = "Confirm"
          break;
        default: // info is default
          var icon_path = info_icon_path;
          var color = info_color;
          if(title == null)
            title = "Information"
          break;
     };
     if(this.props.height != undefined)
        var height = this.props.height;
     else
        var height = '150px';
     if(this.props.width != undefined)
        var height = this.props.width;
     else
        var width = '450px';
     return {icon_path: icon_path, color: color, title: title};
   },
  render: function() {
    return (
      React.createElement("div", {style: {width: this.state.width, height: this.state.height, padding: '20px', backgroundColor: '#eaf0f4', borderStyle: 'solid',
        borderColor: this.state.color, borderWidth: '2px', borderRadius: '4px', textAlign: 'left', position: 'relative'
      }}, 
        React.createElement("div", {style: {marginLeft: '30px'}}, 
            React.createElement("p", {style: {color: this.state.color}}, this.props.i18n(this.state.title)), 
            React.createElement("p", {dangerouslySetInnerHTML: {__html: this.props.i18n(this.props.content)}})
        ), 
        React.createElement("img", {src: this.state.icon_path, style: {position: 'absolute', top: '12px', left: '12px'}})
      )
    );
  }
});

