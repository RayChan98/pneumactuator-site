// PNEUMACTUATOR 导航数据（en 单语）
// 数据依据：02-建站需求书-Pneumatic-Actuator-M2.md §二 页面地图

export const navEN = {
  products: [
    { href: '/products/', label: 'All Products', icon: '📦', desc: 'Full actuator catalog' },
    { href: '/products/rack-and-pinion/', label: 'Rack & Pinion', icon: '⚙️', desc: 'Double-acting & spring return' },
    { href: '/products/scotch-yoke/', label: 'Scotch Yoke', icon: '🔄', desc: 'High-torque quarter-turn' },
    { href: '/products/spring-return/', label: 'Spring Return', icon: '🔧', desc: 'Fail-safe single acting' },
    { href: '/products/double-acting/', label: 'Double Acting', icon: '🔁', desc: 'Precise open/close control' },
    { href: '/products/linear/', label: 'Linear Actuators', icon: '↕️', desc: 'Diaphragm & piston' },
  ],
  industries: [
    { href: '/industries/butterfly-valves/', label: 'Butterfly Valves', icon: '🦋', desc: 'Quarter-turn automation' },
    { href: '/industries/ball-valves/', label: 'Ball Valves', icon: '⚪', desc: 'On-off & throttling' },
    { href: '/industries/oil-gas/', label: 'Oil & Gas', icon: '🛢️', desc: 'Upstream & pipeline' },
    { href: '/industries/water-treatment/', label: 'Water Treatment', icon: '💧', desc: 'WTP & wastewater' },
    { href: '/industries/power-plants/', label: 'Power Plants', icon: '⚡', desc: 'Steam & cooling water' },
    { href: '/industries/chemical-processing/', label: 'Chemical Processing', icon: '🧪', desc: 'Corrosive media duty' },
  ],
  aboutLinks: [
    { href: '/about/', label: 'About Us', icon: '🏢', desc: 'Company story & mission' },
    { href: '/about/#factory', label: 'Factory & Facility', icon: '🏭', desc: 'Production lines' },
    { href: '/about/#quality', label: 'Quality Control', icon: '✅', desc: 'Torque testing & inspection' },
    { href: '/about/#technology', label: 'Technology & Equipment', icon: '🔬', desc: 'CNC & assembly' },
    { href: '/about/#certificates', label: 'Certificates & Compliance', icon: '📜', desc: 'ISO 5211, NAMUR, ATEX' },
    { href: '/about/#process', label: 'Production Process', icon: '⚙️', desc: 'Four QC gates' },
    { href: '/about/#supply-chain', label: 'Supply Chain', icon: '🚚', desc: 'Sourcing & logistics' },
  ],
  servicesLinks: [
    { href: '/services/', label: 'All Services', icon: '🛠️', desc: 'Full service overview' },
    { href: '/services/oem-odm/', label: 'OEM & ODM', icon: '🏷️', desc: 'Private-label manufacturing' },
    { href: '/services/quality-inspection/', label: 'Quality & Inspection', icon: '✅', desc: 'QC & compliance' },
  ],
  manufacturerLinks: [
    { href: '/pneumatic-actuator-manufacturer/', label: 'Pneumatic Actuator Manufacturer', icon: '🏭', desc: 'Industrial actuator OEM factory' },
    { href: '/rack-and-pinion-actuator-manufacturer/', label: 'Rack & Pinion Manufacturer', icon: '⚙️', desc: 'Rack & pinion actuator OEM' },
    { href: '/scotch-yoke-actuator-manufacturer/', label: 'Scotch Yoke Manufacturer', icon: '🔄', desc: 'High-torque actuator OEM' },
    { href: '/spring-return-actuator-manufacturer/', label: 'Spring Return Manufacturer', icon: '🔧', desc: 'Fail-safe actuator OEM' },
  ],
};

export const navES = navEN; // 单语站：es 复用 en（不启用 es 路由）
