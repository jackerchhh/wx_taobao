let apikey = '4921c283465e7ad911719b4e0f2c3304';
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    phone: '',
    city: '',
    prefix: '',
    province: '',
    suit: '',
    supplier: '',
    errMsg: '',
    errNum: -2
  },
bindinput:function(e){
  this.setData({
    phone: e.detail.value
  })
},
phoneTap:function(){
  let phone=this.data.phone;
  if(phone!=null && phone!=""){
    let sefl=this;
    wx.request({
      url:'http://apis.baidu.com/netpopo/shouji/query',
      data: {
        'phone':phone
      },
      header: {
        'apikey':apikey
      },
      success: function(res){
        if(res.data.errNum ==0){
          self.setData({
            errMsg:'',
            errNum:res.data.errNum,
            city:res.data.retData.city,
            prefix:res.data.resData.prefix,
            province:res.data.retData.province,
            suit:res.data.retData.suit,
            supplier:res.data.retData.supplier
          })
        }else{
          self.setData({
            errMsg: res.data.retMsg,
            errNum:res.data.errNum
          })
        }
      }
    })
  }
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})