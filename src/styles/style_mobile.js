import { Dimensions, StyleSheet } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  bg_primary: {
    backgroundColor: '#22252A',
    color: '#fff',
    flex: 1,
    alignItems: 'center',
  },

  // DashBroad Style
  header_mobile: {
    position: 'relative',
    height: 50,
    textAlign: 'center',
    alignItems: 'center',
    // marginBottom: 20,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  logo_title: {
    width: 190,
    height: 55,
    margin: 20,
    marginTop: 50,

  },
  content_body: {
    flex: 1,
    marginBottom: 10,
    marginTop:10,
  },
  box_noti_dashboard: {
    padding: 10,
    flexDirection: 'row',
    flex:1
  },
  row: {
    marginRight: - 10,
    marginLeft: -10
  },
  col_xs_4: {
    textAlign: 'left',
    minHeight: 1,
    marginLeft: 15,
    flex: 1
  },
  icon_noti: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  box_content: {
    backgroundColor: '#22252A',
    padding: 15,
    marginBottom: 20,
    borderRadius: 4,
    flex: 1
  },
  txt_noti: {
    textAlign: 'right',
    fontSize: 30,
    color: '#fff',
    margin: 5,
    fontWeight: 'bold',
  },
  box_home: {
    backgroundColor: '#2d3035',
    marginBottom: 10,

  },
  notibox_title: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 5,
  },
  title_box: {
    fontSize: 18,
    marginBottom: 20,
    color: '#fff',
    fontFamily: 'blod'
  },
  box_item: {
    backgroundColor: '#2d3035',
    padding: 15,
    marginBottom: 20,
    borderRadius: 4,

  },
  btn_task: {
    height: 60,
    borderColor: 'gray',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingRight: 10,
    margin: 10,
    width: deviceWidth - 10 - 10,
  },
  txt_title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 20,
    marginBottom: 20
  },
  txt_Task: {
    color: 'gray',
    borderColor: '#22252A',
    borderBottomWidth: 1,
    margin: 10,
    height: 40,
    textAlign: 'left',
    alignItems: 'center',
  },

  //End DashBroad

  //Login
  login_logo: {
    marginTop: 150,
    alignItems: 'center',
    marginBottom: 50
  },
  logo: {
    width: 230,
    height: 130,
    marginBottom: 10
  },
  txt_logo: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 30,
  },
  form_group: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#22252A',
    borderColor: '#fff',
    borderWidth: 1,
    margin: 5,
    borderRadius: 10,
    marginBottom: 20,

  },
  searchIcon: {
    padding: 10,
  },
  form_control: {
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#22252A',
    color: '#fff',
    width: '80%',
    height: 50
  },
  btn_login: {
    backgroundColor: '#95bd1c',
    alignItems: 'center',
    borderColor: '#95bd1c',
    width: '90%',
    height: 60,
    paddingTop: 15,
    margin: 10,
    borderRadius: 5,
  },
  txt_btnLogin: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  btn_gotpass: {
    alignItems: 'center',
    backgroundColor: '#22252A',
    marginTop: 20,
  },
  txt_forgotpass: {
    color: '#95bd1c',
    fontSize: 16,
  },
  alert_success: {
    width: '90%',
    height: 80,
    backgroundColor: 'rgba(4,164,33,0.2)',
    borderRadius: 10,
    margin: 5,
  },
  txt_alert: {
    color: '#41c300',
    fontSize: 16,
    margin: 5,
    textAlign: 'center',
  },
  //End Login

  //Ticket screen
  title_ticket: {
    color: '#fff',
    fontSize: 30,
    flex: 2,
    textAlign: "center",
    marginLeft: 25
  },
  btn_add: {
    justifyContent: 'flex-start',
    flex: 1
  },
  box_list_content: { width: deviceWidth - 50, flex: 1, backgroundColor: '#22252A' },

  //end Ticket Screen


  //Ticket Details
  table_panle: {
    width: deviceWidth,

},
panel_default: {
    borderColor: "#414141",
    backgroundColor: '#2D3035',
    margin: 10,
    borderWidth: 1.5,
    width: deviceWidth -10 -10,
},
panel_heading: {
    backgroundColor: '#414141',
    borderColor: '#414141',
    
},
panel_title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 15
},
panel_body: {
    padding: 10,
    margin: 5,
},
panel_txtBody: {
    color: '#a9aab2',
    fontSize: 18,
    fontWeight: '800',
    marginLeft: 5
},
modalContent: {
    backgroundColor: '#2D3035',
},
modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#22252A',
    padding: 20
},
modal_title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
},
modal_btnBody:{
    flexDirection: 'row',
    alignItems: 'center',
    height:80,
    borderBottomWidth: 1,
    borderColor: '#878787',
    marginLeft: 20, 
    marginRight:20,
    paddingBottom: -10
},
modalBody:{
    marginBottom:10
},
  //End Ticket Details


  //Add Ticket
  tab_content: {
    paddingTop: 0,
    display: 'none',

  },
  tab_pane: {
    color: '#878787',
    lineHeight: 26,
    paddingTop: 15
  },
  box_noti_ticket: {
    flex: 1,
    padding: 20
  },
  box_add_new_content: {
    flex: 1,
    flexDirection: 'column',
  },
  txt_box_add_new: {
    fontSize: 18,
    color: '#fff',
    marginTop: 0
  },
  box_noti_ticket: {
    flex: 1,
    padding: 20
  },
  form_add: {
    padding: 10,
    flexDirection: 'column'
  },
  group_inline: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  txt_group_inline: {
    color: '#fff',
    fontSize: 16,
    flex: 1

  },
  btn_group_inline: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  txt_btn_group: {
    color: '#95bd1c',
    textAlign: 'center',
    paddingLeft: 5
  },
  row_addTicket: {
    flex: 1,
    flexDirection: 'row',
  },
  btn_registration: {
    backgroundColor: '#95bd1c',
    alignItems: 'center',
    borderColor: '#95bd1c',
    width: '95%',
    height: 60,
    paddingTop: 15,
    margin: 10,
    borderRadius: 5,
  },
  btn_save_Ticket: {
    flex: 1,
    width: '50%',
    backgroundColor: '#95bd1c',
    alignItems: 'center',
    borderColor: '#95bd1c',
    height: 50,
    margin: 5,
    paddingTop: 15,
    borderRadius: 5
  },
  btn_reset_Ticket: {
    flex: 1,
    width: '50%',
    backgroundColor: '#2d3035',
    alignItems: 'center',
    borderColor: '#fff',
    height: 50,
    margin: 5,
    paddingTop: 15,
    borderRadius: 5,
    borderWidth: 1
  },
  //End Add Ticket

  //Notification 
  notification_content: {
    flex: 1,
    justifyContent: 'flex-start',
    margin: 10,
    borderBottomWidth: 1,
    borderColor: '#878787',
  },
  notification_heading: {
    color: '#fff',
    fontSize: 16,
    margin: 10,
  },
  notification_text: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 10,
    marginBottom: 10
  },
  box_noti: {
    width: deviceWidth
  },
  //End Notification

  //Category

  box_menu: {
    width: deviceWidth,
  },
  cate_menu:{
    height: 60,
    borderColor: '#000',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingRight: 10,
    margin: 10,
  },
  txt_collapsible:{
    color: 'gray',
    marginLeft: 30,
    fontSize: 16
  },
  //End Category

  //User
  btn_user: {
    height: 60,
    borderColor: '#22252A',
    borderBottomWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingRight: 10,
  },
  txt_btn_user: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 18
  },
  btn_edit: {
    color: '#95bd1c',
    fontSize: 16,
  },
  box_detail_info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: deviceWidth,
    height: 70,
    borderColor: '#878787',
    borderBottomWidth: 1.5,
    alignItems: 'center',
    padding: 10
  },
  txt_left_label: {
    fontSize: 16,
    color: '#878787',
  },
  txt_right_info: {
    color: '#fff',
    fontSize: 18,

  },

  //End User


  //Card item Ticket
  box_list: {
    backgroundColor: '#2d3035',
    flex: 1,
  },
  header_list: {
    display: 'flex',
    justifyContent: "space-between",
    borderColor: '#414141',
    borderBottomWidth: 1,
    paddingBottom: 15,
    marginBottom: 15,
    flexDirection: 'row',
  },
  txt_leftTitel: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 10
  },
  txt_left: {
    color: 'gray',
  },
  txt_rightTitel: {
    color: '#fff',
  },
  txt_bodyList_title: {
    color: '#fff',
  },
  left_header_list: {
    marginLeft: 10
  },
  txt_right: {
    color: '#95bd1c',
    textAlign: 'right',
  },
  body_list: {
    height: 200
  },
  txt_bodyList: {
    color: '#fff',
  },

  //End Card item Ticket
});
export default styles;
