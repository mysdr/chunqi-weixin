var API = require('../../../../utils/config').API;

Page({
  data: {},
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  sexChange: function (e) {
    this.setData({
      sex: e.detail.value
    })
  },
  sizeChange: function (e) {
    this.setData({
      shit_size: e.detail.value
    })
  },
  inputName: function (e) {
    this.setData({
      name: e.detail.value
    })
  },
  inputIdCard: function (e) {
    this.setData({
      id_card: e.detail.value
    })
  },
  inputPhone: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  inputSosName: function (e) {
    this.setData({
      sos_name: e.detail.value
    })
  },
  inputSosPhone: function (e) {
    this.setData({
      sos_phone: e.detail.value
    })
  },
  inputLike: function (e) {
    this.setData({
      like: e.detail.value
    })
  },
  inputWork: function (e) {
    this.setData({
      work: e.detail.value
    })
  },
  join: function () {
    console.log('clike join');
    if (this.data.name == '' || this.data.name == undefined
      || this.data.id_card == '' || this.data.id_card == undefined
      || this.data.phone == '' || this.data.phone == undefined
      || this.data.sex == '' || this.data.sex == undefined
      || this.data.shit_size == '' || this.data.shit_size == undefined
      || this.data.sos_name == '' || this.data.sos_name == undefined
      || this.data.sos_phone == '' || this.data.sos_phone == undefined
      || this.data.like == '' || this.data.like == undefined
      || this.data.work == '' || this.data.work == undefined) {
      wx.showModal({
        title: '提示',
        content: '请填完信息表！',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    } else if (this.data.id_card.length!==18){
      wx.showModal({
        title: '提示',
        content: '身份证格式不正确！',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    } else if (this.data.phone.length !== 11) {
      wx.showModal({
        title: '提示',
        content: '手机号格式不正确！',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    } else if (this.data.sos_phone.length !== 11) {
      wx.showModal({
        title: '提示',
        content: '紧急联系人手机号格式不正确！',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    } else {
      var that = this;
      var url = API + 'add_manager?name=' + this.data.name + '&phone=' + this.data.phone + '&id_card=' + this.data.id_card + '&sex=' + this.data.sex + '&shit_size=' + this.data.shit_size + '&sos_name=' + this.data.sos_name + '&sos_phone=' + this.data.sos_phone + '&like=' + this.data.like + '&work=' + this.data.work + '&share_id=' + wx.getStorageSync('share_id') + '&nick_name=' + wx.getStorageSync('nick_name') + '&face_url=' + wx.getStorageSync('face_url') + '&openid=' + wx.getStorageSync('openid')
      wx.request({
        url: url,
        data: {},
        method: 'GET',
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        success: function (res) {
          console.log(res)
          wx.setStorageSync('team_id', res.data.data.teamId)
          var token = res.data.data.token
          wx.showModal({
            title: '提示',
            content: '创建成功！！邀请码是：' + wx.getStorageSync('share_id'),
            showCancel: false,
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
                wx.navigateBack({
                  delta: 2,
                  success: function (res) {
                    wx.setStorageSync('role', 4);
                    wx.setStorageSync('token', token);      
                  }
                })
              }
            }
          })
        }
      })
    }
  },
})