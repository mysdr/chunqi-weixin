var app = getApp()

Page({
  data: {

  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    app.getUserInfo(function (userInfo) {
      wx.setStorageSync('nick_name', userInfo.nickName);
      wx.setStorageSync('face_url', userInfo.avatarUrl);
    })
    
  },
  onShareAppMessage: function () {
    // 用户点击右上角分享
    return {
      title: '', // 分享标题
      desc: '', // 分享描述
      path: '' // 分享路径
    }
  },
  showCreate: function () {
    if (wx.getStorageSync('role') == undefined || wx.getStorageSync('role') == '') {
      wx.navigateTo({
        url: './create/create',
        success: function (res) {
          // success
        },
        fail: function () {
          // fail
        },
        complete: function () {
          // complete
        }
      })
    } else if (wx.getStorageSync('role') == 4) {
      wx.showModal({
        title: '提示',
        content: '你已创建了队伍，不可重复创建！',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    } else if (wx.getStorageSync('role') == 1 || wx.getStorageSync('role') == 2 || wx.getStorageSync('role') == 3){
      wx.showModal({
        title: '提示',
        content: '你已加入了其他队伍，不可创建！',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    }
  },
  showJoin: function () {
    if (wx.getStorageSync('role') == 1 || wx.getStorageSync('role') == 2 || wx.getStorageSync('role') == 3){
      wx.showModal({
        title: '提示',
        content: '你已加入了其他队伍，不可再加入！',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    } else if (wx.getStorageSync('role') == 4) {
      wx.showModal({
        title: '提示',
        content: '你已创建了队伍，不可加入其它队伍！',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    } else if (wx.getStorageSync('role') == undefined || wx.getStorageSync('role') == '') {
      wx.navigateTo({
        url: './join/join',
        success: function (res) {
          // success
        },
        fail: function () {
          // fail
        },
        complete: function () {
          // complete
        }
      })
    }
  },
  showMyteam: function () {
    if (wx.getStorageSync('role') == undefined || wx.getStorageSync('role') == '') {
      wx.showModal({
        title: '提示',
        content: '你还未加入队伍，赶紧加入一个吧！',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    } else {
        wx.navigateTo({
        url: './myteam/myteam',
        success: function (res) {
          // success
        },
        fail: function () {
          // fail
        },
        complete: function () {
          // complete
        }
      })
    }
  },
})