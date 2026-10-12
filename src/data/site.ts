// PNEUMACTUATOR 触点单源（K-026 / K-029 口径）
// 全站对客触点（邮箱 / 电话 / WhatsApp / 地址 / 域）只在本文件声明，组件一律 import 引用。
// 品牌域注册 + 品牌箱建档后只改本文件即可全站切换（禁再散落硬编码）。
export const SITE = {
  siteName: 'PNEUMACTUATOR',
  // 线上预览域（astro.config site: 同值，canonical/sitemap 用）
  domain: 'pneumactuator.pages.dev',
  // 在册意图品牌域（RDAP 404=未注册 @2026-10-13，待主人拍板注册）
  brandDomain: 'pneumactuator.com',
  // 过渡态对客触点（K-029：品牌域未注册/品牌箱未建档，先挂个人号；品牌箱切换后改 brandEmail）
  email: 'cj226144@gmail.com',
  brandEmail: 'sales@pneumactuator.com',
  phone: '+86 137 1086 0663',
  telHref: 'tel:+8613710860663',
  waNumber: '8613710860663',
  address: 'Guangzhou, China',
};

export default SITE;
