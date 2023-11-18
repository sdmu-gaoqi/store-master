const req = require.context("../../assets/icons/svg", false, /\.svg$/);
const requireAll = (requireContext) => requireContext.keys();

const re = /\.\/(.*)\.svg/;

// const icons = requireAll(req).map(i => {
//   return i.match(re)[1]
// })
const icons = [
  "http://111.229.138.125/icons/创建订单.svg",
  "http://111.229.138.125/icons/工作台.svg",
  "http://111.229.138.125/icons/订单.svg",
  "http://111.229.138.125/icons/会员.svg",
  "http://111.229.138.125/icons/会员卡.svg",
  "http://111.229.138.125/icons/角色.svg",
  "http://111.229.138.125/icons/客户管理.svg",
  "http://111.229.138.125/icons/门店.svg",
  "http://111.229.138.125/icons/日志.svg",
  "http://111.229.138.125/icons/设置.svg",
  "http://111.229.138.125/icons/收起.svg",
  "http://111.229.138.125/icons/文档管理-项目类文档.svg",
  "http://111.229.138.125/icons/员工.svg",
  "http://111.229.138.125/icons/运营.svg",
  "http://111.229.138.125/icons/运营.svg",
  "http://111.229.138.125/icons/en.webp",
  "http://111.229.138.125/loginBanner.png",
  "http://111.229.138.125/vip.svg",
  "http://111.229.138.125/vue.svg",
];

export default icons;
