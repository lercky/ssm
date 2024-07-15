const menu = {
	list() {
		return [{
			"backMenu": [{
				"child": [{
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "用户",
					"menuJump": "列表",
					"tableName": "yonghu"
				}],
				"menu": "用户管理"
			}, {
				"child": [{
					"buttons": ["新增", "查看", "修改", "删除", "查看评论"],
					"menu": "名师推荐",
					"menuJump": "列表",
					"tableName": "mingshituijian"
				}],
				"menu": "名师推荐管理"
			}, {
				"child": [{
					"buttons": ["新增", "查看", "修改", "删除", "查看评论"],
					"menu": "视频学习",
					"menuJump": "列表",
					"tableName": "shipinxuexi"
				}],
				"menu": "视频学习管理"
			}, {
				"child": [{
					"buttons": ["新增", "查看", "修改", "删除", "查看评论"],
					"menu": "在线学习",
					"menuJump": "列表",
					"tableName": "zaixianxuexi"
				}],
				"menu": "在线学习管理"
			}, {
				"child": [{
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "试题管理",
					"tableName": "examquestion"
				}],
				"menu": "试题管理"
			}, {
				"child": [{
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "论坛交流",
					"tableName": "forum"
				}],
				"menu": "论坛交流"
			}, {
				"child": [{
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "我的收藏管理",
					"tableName": "storeup"
				}],
				"menu": "我的收藏管理"
			}, {
				"child": [{
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "试卷管理",
					"tableName": "exampaper"
				}],
				"menu": "试卷管理"
			}, {
				"child": [{
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "知识解答",
					"tableName": "chat"
				}, {
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "轮播图管理",
					"tableName": "config"
				}],
				"menu": "系统管理"
			}, {
				"child": [{
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "错题本",
					"tableName": "cuotiben"
				}, {
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "试卷列表",
					"tableName": "shijuanliebiao"
				}, {
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "考试记录",
					"tableName": "kaoshijilu"
				}],
				"menu": "考试管理"
			}],
			"frontMenu": [{
				"child": [{
					"buttons": ["查看", "查看评论"],
					"menu": "名师推荐列表",
					"menuJump": "列表",
					"tableName": "mingshituijian"
				}],
				"menu": "名师推荐模块"
			}, {
				"child": [{
					"buttons": ["查看", "查看评论"],
					"menu": "视频学习列表",
					"menuJump": "列表",
					"tableName": "shipinxuexi"
				}],
				"menu": "视频学习模块"
			}, {
				"child": [{
					"buttons": ["查看", "查看评论"],
					"menu": "在线学习列表",
					"menuJump": "列表",
					"tableName": "zaixianxuexi"
				}],
				"menu": "在线学习模块"
			}],
			"hasBackLogin": "是",
			"hasBackRegister": "否",
			"hasFrontLogin": "否",
			"hasFrontRegister": "否",
			"roleName": "管理员",
			"tableName": "users"
		}, {
			"backMenu": [{
				"child": [{
					"buttons": ["查看评论", "查看"],
					"menu": "名师推荐",
					"menuJump": "列表",
					"tableName": "mingshituijian"
				}],
				"menu": "名师推荐管理"
			}, {
				"child": [{
					"buttons": ["查看评论", "查看"],
					"menu": "视频学习",
					"menuJump": "列表",
					"tableName": "shipinxuexi"
				}],
				"menu": "视频学习管理"
			}, {
				"child": [{
					"buttons": ["查看评论", "查看"],
					"menu": "在线学习",
					"menuJump": "列表",
					"tableName": "zaixianxuexi"
				}],
				"menu": "在线学习管理"
			}, {
				"child": [{
					"buttons": ["查看", "修改", "删除"],
					"menu": "我的收藏管理",
					"tableName": "storeup"
				}],
				"menu": "我的收藏管理"
			}, {
				"child": [{
					"buttons": ["查看", "修改", "删除"],
					"menu": "错题本",
					"tableName": "cuotiben"
				}, {
					"buttons": ["查看"],
					"menu": "试卷列表",
					"tableName": "shijuanliebiao"
				}, {
					"buttons": ["查看", "修改", "删除"],
					"menu": "考试记录",
					"tableName": "kaoshijilu"
				}],
				"menu": "考试管理"
			}],
			"frontMenu": [{
				"child": [{
					"buttons": ["查看", "查看评论"],
					"menu": "名师推荐列表",
					"menuJump": "列表",
					"tableName": "mingshituijian"
				}],
				"menu": "名师推荐模块"
			}, {
				"child": [{
					"buttons": ["查看", "查看评论"],
					"menu": "视频学习列表",
					"menuJump": "列表",
					"tableName": "shipinxuexi"
				}],
				"menu": "视频学习模块"
			}, {
				"child": [{
					"buttons": ["查看", "查看评论"],
					"menu": "在线学习列表",
					"menuJump": "列表",
					"tableName": "zaixianxuexi"
				}],
				"menu": "在线学习模块"
			}],
			"hasBackLogin": "是",
			"hasBackRegister": "是",
			"hasFrontLogin": "是",
			"hasFrontRegister": "是",
			"roleName": "用户",
			"tableName": "yonghu"
		}]
	}
}
export default menu;
