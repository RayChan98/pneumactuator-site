# PNEUMACTUATOR — 工业气动执行器 B2B 站（T-42）

> 状态：🟢 建站完成（2026-08-25）｜ 品牌：PNEUMACTUATOR ｜ 域名：pneumactuator.pages.dev（暂用 pages.dev，正式域名待总控统一拍板后走 CF Registrar）
> 技术栈：Astro 7 + Tailwind v4（照 fullcolorcam 路径克隆改造）

## 一、站点概况

- **定位**：Industrial Pneumatic Valve Actuator Manufacturer（工业气动执行器工厂直销 B2B）
- **旗舰**：Rack & Pinion + Scotch Yoke + Spring Return（M2 需求书 §一 边界）
- **页面数**：39 页（5 产品页 + 6 应用页 + 4 manufacturer 页 + 12 blog + 核心页）

## 二、目录结构

```
pneumatic-actuator-site/
├── src/
│   ├── data/products.ts        # 5 产品参数（ISO 5211/NAMUR 行业标准）
│   ├── i18n/nav.ts             # 导航数据（en 单语）
│   ├── components/             # 13 组件（继承 fullcolorcam 骨架）
│   ├── layouts/Layout.astro    # 品牌/canonical/schema
│   └── pages/                  # 39 页
├── functions/api/contact.js    # CF Function 表单（Zoho OAuth2 公司站口径）
└── public/                     # logo/sitemap/robots
```

## 三、关键决策

| 日期 | 决策 |
|:--|:--|
| 2026-08-25 | 品牌定名 PNEUMACTUATOR（工业执行器定位） |
| 2026-08-25 | 色板：深钢蓝 #0F2A43 + 阀门蓝 #1D4ED8 + CTA 橙 #EA580C |
| 2026-08-25 | 砍 es 西语子站（兼职测品线先单语英文） |
| 2026-08-25 | 邮箱口径：公司站 grohoprecision（Zoho OAuth2） |
| 2026-08-25 | CF 部署走个人号 cj226144（CLOUDFLARE_BJ_PAGES_EDIT，兼职线归属） |

## 四、上线前检查清单

- [x] 全站 CCTV 残留清零（grep 验证）
- [x] 构建 39 页全绿（终版）
- [x] 表单字段 contact.astro ↔ contact.js 匹配
- [x] 死链验证（nav 修复后重构建）
- [x] CF Pages 部署（wrangler + 代理 + 个人号 token）
- [x] 上线后 curl 全页 200 验证（2026-08-25 复查 39/39 全 200 零死链）

## 五、待办

- [x] 部署上线（pneumactuator.pages.dev）— 线上与本地 dist sha256 一致
- [x] 飞书网站记录表留痕（2026-08-25 PNEUMACTUATOR 记录表已建，39 页录入）
- [ ] 正式域名（等总控拍板，走 CF Registrar）
- [ ] Semrush 词表回填（词级 vol）
- [ ] logo 5 件套（Trae 或 AI 生成）
