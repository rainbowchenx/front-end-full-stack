import Mock from "mockjs";
// 引入模拟数据
import banner from './banner.json'
import floor from './floor.json'
// 引入新闻数据
import news from './news.json'

Mock.mock("/mock/banner",{code:200,data:banner})
Mock.mock("/mock/floor",{code:200,data:floor})
Mock.mock("/mock/news",{code:200,data:news})
