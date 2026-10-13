import { useMemo, useState } from 'react'
import DisputeCenter from './DisputeCenter.jsx'
import './DisputeCenter.css'
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  Gavel,
  Store,
  Landmark,
  Banknote,
  ShieldCheck,
  UserCog,
  Headset,
  ShieldAlert,
  ChartColumn,
  Bell,
  KeyRound,
  Search,
  Settings,
  CircleHelp,
  Download,
  Plus,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Truck,
  CircleCheck,
  TrendingUp,
  Menu,
  X,
  LogOut,
  Package,
  MoreHorizontal,
} from 'lucide-react'
import OrderDetails from './OrderDetails.jsx'

const navigation = [
  { label: 'Overview', icon: LayoutDashboard },
  { label: 'Buyers Management', icon: Users },
  { label: 'Orders', icon: ShoppingCart },
  { label: 'Disputes', icon: Gavel },
  { label: 'Items Store', icon: Store },
  { label: 'Escrow', icon: Landmark },
  { label: 'Financial', icon: Banknote },
  { label: 'Seller Approval', icon: ShieldCheck },
  { label: 'Sellers Management', icon: UserCog },
  { label: 'Support', icon: Headset },
  { label: 'Content Moderation', icon: ShieldAlert },
  { label: 'Analytics', icon: ChartColumn },
  { label: 'Notification', icon: Bell },
  { label: 'Permissions', icon: KeyRound },
]

const initialOrders = [
  {
    id: 'ORD-8821',
    date: 'Oct 24, 2023',
    time: '14:30 WAT',
    buyer: 'Oluwaseun A.',
    seller: 'AutoParts Hub',
    amount: 125500,
    status: 'Pending',
    initials: 'OA',
    avatar: 'https://i.pravatar.cc/80?img=12',
  },
  {
    id: 'ORD-8820',
    date: 'Oct 24, 2023',
    time: '11:15 WAT',
    buyer: 'Chioma K.',
    seller: 'Lagos Motors Ltd',
    amount: 45000,
    status: 'In Transit',
    initials: 'CK',
    avatar: 'https://i.pravatar.cc/80?img=47',
  },
  {
    id: 'ORD-8819',
    date: 'Oct 23, 2023',
    time: '09:45 WAT',
    buyer: 'Ibrahim B.',
    seller: 'GearBox Specialists',
    amount: 350000,
    status: 'Shipped',
    initials: 'IB',
    avatar: '',
  },
  {
    id: 'ORD-8818',
    date: 'Oct 22, 2023',
    time: '16:20 WAT',
    buyer: 'Ezekiel M.',
    seller: 'Abuja Tyres',
    amount: 85200,
    status: 'Delivered',
    initials: 'EM',
    avatar: 'https://i.pravatar.cc/80?img=53',
  },
  {
    id: 'ORD-8817',
    date: 'Oct 21, 2023',
    time: '10:05 WAT',
    buyer: 'Fatima A.',
    seller: 'Premium Paints & Body',
    amount: 12000,
    status: 'Cancelled',
    initials: 'FA',
    avatar: '',
  },
  {
    id: 'ORD-8816',
    date: 'Oct 20, 2023',
    time: '12:10 WAT',
    buyer: 'Daniel O.',
    seller: 'AutoParts Hub',
    amount: 67500,
    status: 'Pending',
    initials: 'DO',
    avatar: 'https://i.pravatar.cc/80?img=11',
  },
  {
    id: 'ORD-8815',
    date: 'Oct 19, 2023',
    time: '15:40 WAT',
    buyer: 'Amaka N.',
    seller: 'Lagos Motors Ltd',
    amount: 210000,
    status: 'Delivered',
    initials: 'AN',
    avatar: 'https://i.pravatar.cc/80?img=44',
  },
  {
    id: 'ORD-8814',
    date: 'Oct 18, 2023',
    time: '08:35 WAT',
    buyer: 'Musa G.',
    seller: 'Abuja Tyres',
    amount: 98000,
    status: 'In Transit',
    initials: 'MG',
    avatar: '',
  },
]

const statusStyles = {
  Pending: 'bg-orange-50 text-orange-600 border-orange-200',
  'In Transit': 'bg-blue-50 text-blue-600 border-blue-200',
  Shipped: 'bg-purple-50 text-purple-600 border-purple-200',
  Delivered: 'bg-green-50 text-green-700 border-green-200',
  Cancelled: 'bg-red-100 text-red-700 border-red-200',
}

const formatMoney = (amount) =>
  new Intl.NumberFormat('en-NG', {
    maximumFractionDigits: 0,
  }).format(amount)

function Avatar({ order }) {
  return order.avatar ? (
    <img
      src={order.avatar}
      alt=""
      className="h-8 w-8 shrink-0 rounded-full border border-slate-100 object-cover"
    />
  ) : (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ebe6f7] text-xs text-[#514b60]">
      {order.initials}
    </span>
  )
}

function Sidebar({ activePage, setActivePage, open, close }) {
  return (
    <>
      {open && (
        <button
          aria-label="Close navigation backdrop"
          onClick={close}
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-[#d5cce7] bg-[#f5f0fd] transition-transform duration-200 lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-18.25 shrink-0 items-center gap-3 border-b border-[#d5cce7] px-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#3908e8] text-sm font-semibold text-white">
            AP
          </div>
          <div className="min-w-0">
            <h2 className="whitespace-nowrap text-[15px] font-bold text-[#3105ce]">
              Marketplace Admin
            </h2>
            <p className="mt-0.5 text-xs tracking-wide text-[#555064]">
              System Control Panel
            </p>
          </div>
          <button
            onClick={close}
            aria-label="Close menu"
            className="ml-auto rounded p-1 lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

      <nav className="flex-1 space-y-1 overflow-y-auto px-2 py-8">
          {navigation.map(({ label, icon: Icon }) => (
            <button
              key={label}
              onClick={() => {
                setActivePage(label)
                close()
              }}
              className={`relative flex min-h-11 w-full items-center gap-3 rounded-lg px-3 text-left text-sm font-medium transition-colors ${
                activePage === label
                  ? 'bg-[#e6ddff] text-[#4316d8] after:absolute after:right-0 after:top-0 after:h-full after:w-1 after:rounded-l after:bg-[#4b16e8]'
                  : 'text-[#4c4759] hover:bg-[#ece5fb]'
              }`}
            >
              <Icon size={21} strokeWidth={2.1} />
              <span>{label}</span>
            </button>
          ))}
        </nav>

        <div className="flex min-h-14.25 shrink-0 items-center gap-3 border-t border-[#d5cce7] px-4 py-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e8e3f2]">
            <Users size={20} className="text-[#514b60]" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium">Admin User</p>
            <p className="text-[11px] tracking-wide text-[#716b7c]">
              Super Admin
            </p>
          </div>
          <button
            aria-label="Log out"
            title="Log out"
            onClick={() => alert('Connect your authentication system to log out.')}
            className="rounded p-1 text-[#514b60] hover:bg-[#e6ddff]"
          >
            <LogOut size={21} />
          </button>
        </div>
      </aside>
    </>
  )
}

function StatCard({ title, value, change, positive, icon: Icon, tone }) {
  const tones = {
    purple: 'bg-[#eee7ff] text-[#4b16e8]',
    orange: 'bg-orange-50 text-orange-500',
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-700',
  }

  return (
    <div className="min-w-0 rounded-xl border border-[#cec4e3] bg-white p-4 sm:p-5">
      <div className="flex items-start justify-between gap-2">
        <p className="text-sm text-[#4c475b]">{title}</p>
        <span className={`rounded-lg p-1.5 ${tones[tone]}`}>
          <Icon size={15} />
        </span>
      </div>
      <p className="mt-2 text-2xl font-normal tracking-tight text-[#24212e]">
        {value}
      </p>
      <div
        className={`mt-2 flex items-center gap-1 text-[11px] ${
          positive ? 'text-green-600' : 'text-red-500'
        }`}
      >
        {positive ? <TrendingUp size={13} /> : <TrendingUp size={13} />}
        <span>{change} vs last month</span>
      </div>
    </div>
  )
}

function OrdersTable({ orders, onStatusChange, onOrderSelect }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-212.5 border-collapse text-left">
        <thead>
          <tr className="h-16.25 border-b border-[#d3c9e4] bg-[#f5f0fd] text-[13px] font-medium text-[#514b60]">
            <th className="px-4 font-medium sm:px-5">Order ID</th>
            <th className="px-3 font-medium">Date</th>
            <th className="px-3 font-medium">Buyer</th>
            <th className="px-3 font-medium">Seller</th>
            <th className="px-3 font-medium">
              Amount
              <br />
              (₦)
            </th>
            <th className="px-3 font-medium">Status</th>
            <th className="px-4 text-right font-medium sm:px-5">Actions</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => {
            const canOpenDetails = order.id === 'ORD-8821'

            return (
              <tr
                key={order.id}
                onClick={canOpenDetails ? onOrderSelect : undefined}
                className={`h-23 border-b border-[#d3c9e4] text-sm last:border-b-0 hover:bg-[#fcfaff] ${
                  canOpenDetails ? 'cursor-pointer' : ''
                }`}
              >
                <td className="px-4 font-semibold text-[#252230] sm:px-5">
                  {canOpenDetails ? (
                    <button
                      type="button"
                      aria-label={`View details for order ${order.id}`}
                      onClick={(event) => {
                        event.stopPropagation()
                        onOrderSelect()
                      }}
                      className="block max-w-19 text-left wrap-break-word leading-6"
                    >
                    #{order.id}
                    </button>
                  ) : (
                    <span className="block max-w-19 wrap-break-word leading-6">
                      #{order.id}
                    </span>
                  )}
                </td>

                <td className="px-3">
                  <span className="block text-[13px] text-[#514b60]">
                    {order.date}
                  </span>
                  <span className="mt-1 block text-[10px] text-[#777181]">
                    {order.time}
                  </span>
                </td>

                <td className="px-3">
                  <div className="flex items-center gap-3">
                    <Avatar order={order} />
                    <span className="max-w-28.75 whitespace-normal text-[15px] leading-6">
                      {order.buyer}
                    </span>
                  </div>
                </td>

                <td className="max-w-45 whitespace-normal px-3 text-[15px] leading-6">
                  {order.seller}
                </td>

                <td className="whitespace-nowrap px-3 font-semibold text-[#292634]">
                  {formatMoney(order.amount)}
                </td>

                <td className="px-3">
                  <select
                    aria-label={`Change status for ${order.id}`}
                    value={order.status}
                    onClick={(event) => event.stopPropagation()}
                    onChange={(event) =>
                      onStatusChange(order.id, event.target.value)
                    }
                    className={`max-w-31.25 rounded border px-2 py-2 text-sm font-medium focus:outline-none ${statusStyles[order.status]}`}
                  >
                    {Object.keys(statusStyles).map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </td>

                <td className="px-4 text-right sm:px-5">
                  <button
                    title={`More actions for ${order.id}`}
                    aria-label={`More actions for ${order.id}`}
                    onClick={(event) => {
                      event.stopPropagation()
                      alert(
                        `Order: ${order.id}\nBuyer: ${order.buyer}\nSeller: ${order.seller}\nAmount: ₦${formatMoney(order.amount)}\nStatus: ${order.status}`,
                      )
                    }}
                    className="rounded-lg p-2 text-[#514b60] hover:bg-[#eee7ff]"
                  >
                    <MoreHorizontal size={20} />
                  </button>
                </td>
              </tr>
            )
          })}

          {orders.length === 0 && (
            <tr>
              <td
                colSpan={7}
                className="px-5 py-16 text-center text-sm text-[#716b7c]"
              >
                No orders match your search.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default function App() {
  const [showOrderDetails, setShowOrderDetails] = useState(false)
  const [activePage, setActivePage] = useState('Orders')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [globalSearch, setGlobalSearch] = useState('')
  const [orderSearch, setOrderSearch] = useState('')
  const [activeFilter, setActiveFilter] = useState('All Orders')
  const [currentPage, setCurrentPage] = useState(1)
  const [orders, setOrders] = useState(initialOrders)
  const [showFilters, setShowFilters] = useState(false)
  const [sellerFilter, setSellerFilter] = useState('All sellers')
  const [showManualOrder, setShowManualOrder] = useState(false)
  const [newBuyer, setNewBuyer] = useState('')
  const [newSeller, setNewSeller] = useState('')
  const [newAmount, setNewAmount] = useState('')

  const pageSize = 5

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const matchesTab =
        activeFilter === 'All Orders' ||
        (activeFilter === 'Pending' && order.status === 'Pending') ||
        (activeFilter === 'In Transit' && order.status === 'In Transit') ||
        (activeFilter === 'Delivered' && order.status === 'Delivered')

      const searchText = `${order.id} ${order.buyer} ${order.seller} ${order.status}`.toLowerCase()
      const matchesSearch =
        `${order.id} ${order.buyer} ${order.seller} ${order.status}`
          .toLowerCase()
          .includes(orderSearch.toLowerCase().trim()) &&
        searchText.includes('')

      const matchesGlobal = `${order.id} ${order.buyer} ${order.seller}`
        .toLowerCase()
        .includes(globalSearch.toLowerCase().trim())

      const matchesSeller =
        sellerFilter === 'All sellers' || order.seller === sellerFilter

      return matchesTab && matchesSearch && matchesGlobal && matchesSeller
    })
  }, [orders, activeFilter, orderSearch, globalSearch, sellerFilter])

  const totalPages = Math.max(1, Math.ceil(filteredOrders.length / pageSize))
  const safePage = Math.min(currentPage, totalPages)
  const pageOrders = filteredOrders.slice(
    (safePage - 1) * pageSize,
    safePage * pageSize,
  )

  function updateStatus(id, status) {
    setOrders((previous) =>
      previous.map((order) =>
        order.id === id ? { ...order, status } : order,
      ),
    )
  }

  function exportOrders() {
    const headers = ['Order ID', 'Date', 'Buyer', 'Seller', 'Amount (NGN)', 'Status']
    const rows = filteredOrders.map((order) => [
      order.id,
      order.date,
      order.buyer,
      order.seller,
      order.amount,
      order.status,
    ])

    const csv = [headers, ...rows]
      .map((row) =>
        row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(','),
      )
      .join('\r\n')

    const blob = new Blob(['\uFEFF' + csv], {
      type: 'text/csv;charset=utf-8;',
    })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'marketplace-orders.csv'
    link.click()
    URL.revokeObjectURL(url)
  }

  function createOrder(event) {
    event.preventDefault()

    if (!newBuyer.trim() || !newSeller.trim() || Number(newAmount) <= 0) {
      alert('Enter a buyer, seller, and amount greater than zero.')
      return
    }

    const nextId =
      Math.max(0, ...orders.map((order) => Number(order.id.split('-')[1]))) + 1

    const order = {
      id: `ORD-${nextId}`,
      date: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
      }),
      time: new Date().toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Africa/Lagos',
      }) + ' WAT',
      buyer: newBuyer.trim(),
      seller: newSeller.trim(),
      amount: Number(newAmount),
      status: 'Pending',
      initials: newBuyer.trim().split(/\s+/).map((word) => word[0]).join('').slice(0, 2).toUpperCase(),
      avatar: '',
    }

    setOrders((previous) => [order, ...previous])
    setNewBuyer('')
    setNewSeller('')
    setNewAmount('')
    setActiveFilter('All Orders')
    setOrderSearch('')
    setGlobalSearch('')
    setSellerFilter('All sellers')
    setCurrentPage(1)
    setShowManualOrder(false)
  }

  const pageTitles = {
    Overview: ['Overview', 'Monitor marketplace performance at a glance'],
    'Buyers Management': ['Buyers Management', 'Manage marketplace buyers'],
    Orders: ['Orders Management', 'Monitor and manage all marketplace transactions'],
    Disputes: ['Disputes', 'Review and resolve marketplace disputes'],
    'Items Store': ['Items Store', 'Manage marketplace listings'],
    Escrow: ['Escrow', 'Monitor held marketplace payments'],
    Financial: ['Financial', 'Review marketplace financial activity'],
    'Seller Approval': ['Seller Approval', 'Review seller applications'],
    'Sellers Management': ['Sellers Management', 'Manage marketplace sellers'],
    Support: ['Support', 'Manage customer support requests'],
    'Content Moderation': ['Content Moderation', 'Review marketplace content'],
    Analytics: ['Analytics', 'Track marketplace performance'],
    Notification: ['Notification', 'Manage marketplace notifications'],
    Permissions: ['Permissions', 'Manage administrator access'],
  }

  const [heading, subtitle] = pageTitles[activePage] || pageTitles.Orders

  if (showOrderDetails) {
    return (
      <OrderDetails
        embedded
        onBack={() => setShowOrderDetails(false)}
      />
    )
  }

  return (
    <div className="min-h-screen bg-[#faf7ff] text-[#201e2b]">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        open={mobileMenuOpen}
        close={() => setMobileMenuOpen(false)}
      />

      <div className="min-h-screen lg:pl-64">
        <header className="sticky top-0 z-30 flex h-18.25 items-center gap-3 border-b border-[#d5cce7] bg-white px-4 sm:px-6">
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation"
            className="rounded-lg p-2 text-[#514b60] hover:bg-[#f5f0fd] lg:hidden"
          >
            <Menu size={22} />
          </button>

          <div className="relative w-full max-w-sm">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#716b7c]"
            />
            <input
              type="search"
              value={globalSearch}
              onChange={(event) => {
                setGlobalSearch(event.target.value)
                setCurrentPage(1)
              }}
              placeholder="Search orders, sellers, buyers..."
              className="h-9.75 w-full rounded-lg border border-[#d2c7e4] bg-[#f6f1ff] pl-10 pr-3 text-sm placeholder:text-[#81798e]"
            />
          </div>

          <div className="ml-auto flex shrink-0 items-center gap-3 sm:gap-5">
            <button
              title="Settings"
              aria-label="Settings"
              onClick={() => setActivePage('Permissions')}
              className="rounded-lg p-1 text-[#514b60] hover:bg-[#f5f0fd]"
            >
              <Settings size={22} />
            </button>
            <button
              title="Help"
              aria-label="Help"
              onClick={() => setActivePage('Support')}
              className="rounded-lg p-1 text-[#514b60] hover:bg-[#f5f0fd]"
            >
              <CircleHelp size={22} />
            </button>
            <img
              src="https://i.pravatar.cc/80?img=68"
              alt="Admin profile"
              className="h-8 w-8 rounded-full border border-[#ded7e9] object-cover"
            />
          </div>
        </header>

        <main className={activePage === 'Disputes' ? 'w-full' : 'mx-auto max-w-[1800px] p-4 sm:p-6 lg:p-8'}>
          {activePage !== 'Disputes' && <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h1 className="text-[27px] font-semibold leading-tight tracking-tight sm:text-[34px]">
                {heading}
              </h1>
              <p className="mt-1 text-sm tracking-wide text-[#514b60]">
                {subtitle}
              </p>
            </div>

            {activePage === 'Orders' && (
              <div className="flex shrink-0 items-center gap-3">
                <button
                  onClick={exportOrders}
                  className="inline-flex h-9.75 items-center justify-center gap-2 rounded-lg border border-[#cec4e3] bg-white px-4 text-sm font-medium hover:bg-[#f5f0fd]"
                >
                  <Download size={15} />
                  Export
                </button>
                <button
                  onClick={() => setShowManualOrder(true)}
                  className="inline-flex h-9.75 items-center justify-center gap-2 rounded-lg bg-[#3105ce] px-4 text-sm font-medium text-white hover:bg-[#2603a8]"
                >
                  <Plus size={16} />
                  Manual Order
                </button>
              </div>
            )}
          </div>}

          {activePage === 'Disputes' ? (
            <DisputeCenter />
          ) : activePage === 'Orders' ? (
            <>
              <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
                <StatCard
                  title="Total Orders"
                  value="42,502"
                  change="+12%"
                  positive
                  icon={ShoppingCart}
                  tone="purple"
                />
                <StatCard
                  title="Pending Fulfillment"
                  value="1,240"
                  change="+5%"
                  icon={Clock3}
                  tone="orange"
                />
                <StatCard
                  title="Logistics in Transit"
                  value="854"
                  change="-2%"
                  positive
                  icon={Truck}
                  tone="blue"
                />
                <StatCard
                  title="Completed"
                  value="38,408"
                  change="+15%"
                  positive
                  icon={CircleCheck}
                  tone="green"
                />
              </section>

          <section className="overflow-hidden rounded-xl border border-[#cec4e3] bg-white">
                <div className="flex flex-col gap-4 border-b border-[#d3c9e4] p-4 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex flex-wrap items-center gap-2">
                    {['All Orders', 'Pending', 'In Transit', 'Delivered'].map(
                      (filter) => (
                        <button
                          key={filter}
                          onClick={() => {
                            setActiveFilter(filter)
                            setCurrentPage(1)
                          }}
                          className={`rounded border px-3 py-2 text-[13px] font-medium transition-colors ${
                            activeFilter === filter
                              ? 'border-[#4316e8] bg-[#f5f0ff] text-[#3105ce]'
                              : 'border-[#d3c9e4] bg-[#f6f1ff] text-[#514b60] hover:bg-[#eae1ff]'
                          }`}
                        >
                          {filter}
                        </button>
                      ),
                    )}
                  </div>

                  <div className="flex flex-col gap-2 sm:flex-row">
                    <div className="relative min-w-0 flex-1 sm:w-64">
                      <Search
                        size={15}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-[#716b7c]"
                      />
                      <input
                        type="search"
                        value={orderSearch}
                        onChange={(event) => {
                          setOrderSearch(event.target.value)
                          setCurrentPage(1)
                        }}
                        placeholder="Search Order ID..."
                        className="h-9 w-full rounded border border-[#d3c9e4] pl-9 pr-3 text-sm placeholder:text-[#81798e]"
                      />
                    </div>

                    <button
                      onClick={() => setShowFilters((previous) => !previous)}
                      className={`inline-flex h-9 items-center justify-center gap-2 rounded border px-3 text-sm hover:bg-[#f5f0fd] ${
                        showFilters
                          ? 'border-[#4316e8] text-[#3105ce]'
                          : 'border-[#d3c9e4]'
                      }`}
                    >
                      <SlidersHorizontal size={15} />
                      Filter
                    </button>
                  </div>
                </div>

                {showFilters && (
                  <div className="flex flex-col gap-3 border-b border-[#d3c9e4] bg-[#fcfaff] p-4 sm:flex-row sm:items-center">
                    <label className="text-sm text-[#514b60]">
                      Seller
                    </label>
                    <select
                      value={sellerFilter}
                      onChange={(event) => {
                        setSellerFilter(event.target.value)
                        setCurrentPage(1)
                      }}
                      className="h-9 rounded border border-[#d3c9e4] bg-white px-3 text-sm sm:w-64"
                    >
                      <option>All sellers</option>
                      {[...new Set(orders.map((order) => order.seller))].map(
                        (seller) => (
                          <option key={seller}>{seller}</option>
                        ),
                      )}
                    </select>
                    <button
                      onClick={() => {
                        setSellerFilter('All sellers')
                        setOrderSearch('')
                        setGlobalSearch('')
                        setActiveFilter('All Orders')
                        setCurrentPage(1)
                      }}
                      className="text-left text-sm font-medium text-[#4316e8] hover:underline"
                    >
                      Clear filters
                    </button>
                  </div>
                )}

                <OrdersTable
                  orders={pageOrders}
                  onStatusChange={updateStatus}
                  onOrderSelect={() => setShowOrderDetails(true)}
                />

                <div className="flex flex-col gap-3 border-t border-[#d3c9e4] px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
                  <p className="text-[13px] text-[#514b60]">
                    Showing{' '}
                    {filteredOrders.length === 0
                      ? 0
                      : (safePage - 1) * pageSize + 1}{' '}
                    to {Math.min(safePage * pageSize, filteredOrders.length)}{' '}
                    of {filteredOrders.length.toLocaleString()} entries
                  </p>

                  <div className="flex items-center gap-1 self-end sm:self-auto">
                    <button
                      disabled={safePage === 1}
                      onClick={() => setCurrentPage((page) => page - 1)}
                      aria-label="Previous page"
                      className="rounded border border-[#d3c9e4] p-1 text-[#514b60] disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <ChevronLeft size={16} />
                    </button>

                    {Array.from({ length: totalPages }, (_, index) => index + 1)
                      .filter(
                        (page) =>
                          page === 1 ||
                          page === totalPages ||
                          Math.abs(page - safePage) <= 1,
                      )
                      .reduce((items, page, index, pages) => {
                        if (index > 0 && page - pages[index - 1] > 1) {
                          items.push('...')
                        }
                        items.push(page)
                        return items
                      }, [])
                      .map((page, index) =>
                        page === '...' ? (
                          <span
                            key={`ellipsis-${index}`}
                            className="px-2 text-sm"
                          >
                            ...
                          </span>
                        ) : (
                          <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`min-w-8 rounded px-2 py-2 text-sm ${
                              safePage === page
                                ? 'bg-[#3105ce] text-white'
                                : 'hover:bg-[#eee7ff]'
                            }`}
                          >
                            {page}
                          </button>
                        ),
                      )}

                    <button
                      disabled={safePage === totalPages}
                      onClick={() => setCurrentPage((page) => page + 1)}
                      aria-label="Next page"
                      className="rounded border border-[#d3c9e4] p-1 text-[#514b60] disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </section>
            </>
          ) : (
            <section className="rounded-xl border border-[#cec4e3] bg-white p-8 sm:p-12">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#eee7ff] text-[#4316e8]">
                <Package size={24} />
              </div>
              <h2 className="text-xl font-semibold">{activePage}</h2>
              <p className="mt-2 max-w-lg text-sm leading-6 text-[#716b7c]">
                This navigation item is ready for you to build next. The
                Orders Management page is the fully implemented sample
                dashboard in this project.
              </p>
              <button
                onClick={() => setActivePage('Orders')}
                className="mt-5 rounded-lg bg-[#3105ce] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#2603a8]"
              >
                Return to Orders
              </button>
            </section>
          )}
        </main>
      </div>

      {showManualOrder && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center overflow-y-auto bg-black/40 p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setShowManualOrder(false)
            }
          }}
        >
          <form
            onSubmit={createOrder}
            className="my-auto w-full max-w-md rounded-2xl border border-[#d3c9e4] bg-white p-6 shadow-xl"
          >
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">Create Manual Order</h2>
                <p className="mt-1 text-sm text-[#716b7c]">
                  Enter the order details below.
                </p>
              </div>
              <button
                type="button"
                aria-label="Close dialog"
                onClick={() => setShowManualOrder(false)}
                className="rounded-lg p-2 hover:bg-[#f5f0fd]"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium">
                Buyer name
                <input
                  required
                  value={newBuyer}
                  onChange={(event) => setNewBuyer(event.target.value)}
                  placeholder="e.g. John A."
                  className="mt-1.5 h-10 w-full rounded-lg border border-[#d3c9e4] px-3 font-normal"
                />
              </label>

              <label className="block text-sm font-medium">
                Seller name
                <input
                  required
                  value={newSeller}
                  onChange={(event) => setNewSeller(event.target.value)}
                  placeholder="e.g. AutoParts Hub"
                  className="mt-1.5 h-10 w-full rounded-lg border border-[#d3c9e4] px-3 font-normal"
                />
              </label>

              <label className="block text-sm font-medium">
                Amount (₦)
                <input
                  required
                  min="1"
                  type="number"
                  value={newAmount}
                  onChange={(event) => setNewAmount(event.target.value)}
                  placeholder="e.g. 125500"
                  className="mt-1.5 h-10 w-full rounded-lg border border-[#d3c9e4] px-3 font-normal"
                />
              </label>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowManualOrder(false)}
                className="rounded-lg border border-[#d3c9e4] px-4 py-2.5 text-sm font-medium hover:bg-[#f5f0fd]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-lg bg-[#3105ce] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#2603a8]"
              >
                Create Order
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}
