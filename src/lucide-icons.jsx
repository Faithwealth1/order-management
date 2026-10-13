const shapes = {
  LayoutDashboard: <><rect x="3" y="3" width="8" height="8" rx="1"/><rect x="13" y="3" width="8" height="5" rx="1"/><rect x="13" y="10" width="8" height="11" rx="1"/><rect x="3" y="13" width="8" height="8" rx="1"/></>,
  Users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>,
  ShoppingCart: <><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></>,
  Gavel: <><path d="m14 13 7-7-3-3-7 7"/><path d="m5 22 9-9"/><path d="m2 19 3 3"/><path d="m15 4 5 5"/><path d="m4 12 8 8"/></>,
  Store: <><path d="m2 7 2-4h16l2 4"/><path d="M4 7v14h16V7"/><path d="M2 7a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0"/><path d="M9 21v-7h6v7"/></>,
  Landmark: <><path d="m3 10 9-7 9 7"/><path d="M4 10h16M5 10v9m5-9v9m4-9v9m5-9v9M3 21h18"/></>,
  Banknote: <><rect x="2" y="5" width="20" height="14" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M6 9h.01M18 15h.01"/></>,
  ShieldCheck: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11"/><path d="m9 12 2 2 4-4"/></>,
  UserCog: <><circle cx="10" cy="8" r="5"/><path d="M2 21v-2a8 8 0 0 1 12-7"/><circle cx="18" cy="17" r="3"/><path d="m18 12v2m0 6v2m5-5h-2m-6 0h-2m8.5-3.5-1.4 1.4m-4.2 4.2-1.4 1.4m7 0-1.4-1.4m-4.2-4.2-1.4-1.4"/></>,
  Headset: <><path d="M3 14v-3a9 9 0 0 1 18 0v3"/><path d="M5 14h2v6H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2Zm14 0h-2v6h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2Z"/><path d="M12 21h3"/></>,
  ShieldAlert: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11"/><path d="M12 8v4m0 4h.01"/></>,
  ChartColumn: <><path d="M3 3v18h18"/><rect x="7" y="12" width="3" height="6"/><rect x="12" y="8" width="3" height="10"/><rect x="17" y="5" width="3" height="13"/></>,
  Bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/></>,
  KeyRound: <><circle cx="8" cy="15" r="5"/><path d="m21 2-9.6 9.6M15.5 7.5l3 3L22 7l-3-3"/></>,
  Search: <><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></>,
  Settings: <><circle cx="12" cy="12" r="3"/><path d="m19.4 15 .1.1 1.4 1.1-1.4 2.4-1.7-.7a8 8 0 0 1-1.6.9l-.3 1.8h-2.8l-.3-1.8a8 8 0 0 1-1.6-.9l-1.7.7-1.4-2.4 1.4-1.1a8 8 0 0 1 0-1.9l-1.4-1.1 1.4-2.4 1.7.7a8 8 0 0 1 1.6-.9l.3-1.8h2.8l.3 1.8a8 8 0 0 1 1.6.9l1.7-.7 1.4 2.4-1.4 1.1a8 8 0 0 1 0 1.9Z" transform="translate(-1 -1)"/></>,
  CircleHelp: <><circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3m.1 4h.01"/></>,
  Download: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5M12 15V3"/></>,
  Plus: <><path d="M12 5v14M5 12h14"/></>,
  SlidersHorizontal: <><path d="M4 21v-7m0-4V3m8 18v-9m0-4V3m8 18v-5m0-4V3M2 14h4m4-6h4m4 8h4"/></>,
  ChevronLeft: <><path d="m15 18-6-6 6-6"/></>,
  ChevronRight: <><path d="m9 18 6-6-6-6"/></>,
  Clock3: <><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></>,
  Truck: <><path d="M10 17h4V5H2v12h3"/><path d="M14 9h5l3 4v4h-3"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></>,
  CircleCheck: <><circle cx="12" cy="12" r="10"/><path d="m8 12 3 3 5-6"/></>,
  TrendingUp: <><path d="m22 7-8.5 8.5-5-5L2 17"/><path d="M16 7h6v6"/></>,
  Menu: <><path d="M4 6h16M4 12h16M4 18h16"/></>,
  X: <><path d="m18 6-12 12M6 6l12 12"/></>,
  LogOut: <><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5m5 5H9"/></>,
  Package: <><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="M3 8v8l9 5 9-5V8m-9 5v8"/></>,
  MoreHorizontal: <><circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/></>,
}
function createIcon(name) {
  return function Icon({ size = 24, strokeWidth = 2, className = '', ...props }) {
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...props}>{shapes[name]}</svg>
  }
}
export const LayoutDashboard = createIcon('LayoutDashboard')
export const Users = createIcon('Users')
export const ShoppingCart = createIcon('ShoppingCart')
export const Gavel = createIcon('Gavel')
export const Store = createIcon('Store')
export const Landmark = createIcon('Landmark')
export const Banknote = createIcon('Banknote')
export const ShieldCheck = createIcon('ShieldCheck')
export const UserCog = createIcon('UserCog')
export const Headset = createIcon('Headset')
export const ShieldAlert = createIcon('ShieldAlert')
export const ChartColumn = createIcon('ChartColumn')
export const Bell = createIcon('Bell')
export const KeyRound = createIcon('KeyRound')
export const Search = createIcon('Search')
export const Settings = createIcon('Settings')
export const CircleHelp = createIcon('CircleHelp')
export const Download = createIcon('Download')
export const Plus = createIcon('Plus')
export const SlidersHorizontal = createIcon('SlidersHorizontal')
export const ChevronLeft = createIcon('ChevronLeft')
export const ChevronRight = createIcon('ChevronRight')
export const Clock3 = createIcon('Clock3')
export const Truck = createIcon('Truck')
export const CircleCheck = createIcon('CircleCheck')
export const TrendingUp = createIcon('TrendingUp')
export const Menu = createIcon('Menu')
export const X = createIcon('X')
export const LogOut = createIcon('LogOut')
export const Package = createIcon('Package')
export const MoreHorizontal = createIcon('MoreHorizontal')
