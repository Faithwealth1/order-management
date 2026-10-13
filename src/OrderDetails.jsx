import { useState } from 'react'
import './App.css'
import DisputeCenter from './DisputeCenter.jsx'

const nav = [
  ['\u25A6', 'Overview'], ['\u265F', 'Buyers Management'], ['\u{1F6D2}', 'Orders'], ['\u2692', 'Disputes'],
  ['\u25A4', 'Items Store'], ['\u265C', 'Escrow'], ['\u25A3', 'Financial'], ['\u2662', 'Seller Approval'],
  ['\u2659', 'Sellers Management'], ['\u25C9', 'Support'], ['\u25C8', 'Content Moderation'],
  ['\u25A5', 'Analytics'], ['\u2667', 'Notification'], ['\u26BF', 'Permissions'],
]
const history = [
  ['In Transit', 'Package arrived at regional facility. Lagos hub.', 'Oct 26, 09:15 AM', true],
  ['Dispatched', 'Package handed over to logistics partner.', 'Oct 25, 14:20 PM'],
  ['Paid', 'Payment verified by Escrow service.', 'Oct 24, 14:45 PM'],
  ['Ordered', 'Order #ORD-8821 created.', 'Oct 24, 14:30 PM'],
]
function Icon({ children, size = 18 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
}
function CardTitle({ icon, children, trailing }) {
  return <div className="card-title"><h2>{icon}{children}</h2>{trailing && <span>{trailing}</span>}</div>
}
function App({ embedded = false, onBack }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activePage, setActivePage] = useState('Orders')
  const [status, setStatus] = useState('In Transit')
  const [copied, setCopied] = useState(false)
  return <div className={`app-shell ${embedded ? 'embedded-details-shell' : ''}`}>
    {!embedded && <aside className={`sidebar ${menuOpen ? 'sidebar-open' : ''}`}>
      <div className="brand"><div className="brand-mark">AP</div><div><strong>Marketplace Admin</strong><span>System Control Panel</span></div></div>
      <nav>{nav.map(([icon, label]) => <button key={label} onClick={() => { if (label === 'Disputes' || label === 'Orders') setActivePage(label); setMenuOpen(false) }} className={`nav-item ${activePage === label ? 'selected' : ''}`}><span className="nav-icon">{icon}</span>{label}</button>)}</nav>
      <div className="admin"><div className="avatar admin-avatar">●</div><div><strong>Admin User</strong><span>Super Admin</span></div><button aria-label="Sign out"><Icon><path d="M10 17l5-5-5-5M15 12H3"/><path d="M12 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6"/></Icon></button></div>
    </aside>}
    {!embedded && menuOpen && <button className="scrim" onClick={() => setMenuOpen(false)} aria-label="Close menu"/>}
    {activePage === 'Disputes' ? <DisputeCenter onMenuToggle={() => setMenuOpen((open) => !open)} /> : <main className={`main ${embedded ? 'embedded-order-main' : ''}`}>
      {embedded && <button className="order-back-button" onClick={onBack}>&#8592; Back to Orders</button>}
      <header className="page-header">
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">☰</button>
        <div className="header-top"><div className="order-heading"><h1>Order #ORD-8821</h1><span className="status-pill">{status}</span></div>
          <div className="header-actions"><button><Icon><path d="M3 7h12v10H3zM15 10h4l3 3v4h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></Icon>Track Shipment</button><button><Icon><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></Icon>Contact Seller</button><button><Icon><circle cx="12" cy="8" r="3"/><path d="M5 20v-1a7 7 0 0 1 14 0v1z"/></Icon>Contact Buyer</button></div>
        </div>
        <div className="header-sub"><p>Placed on October 24, 2023 at 14:30 EST</p><button className="primary-button" onClick={() => setStatus(status === 'In Transit' ? 'Delivered' : 'In Transit')}><Icon><path d="M20 7v5h-5M20 12a8 8 0 1 1-2.34-5.66L20 7"/></Icon>Update Status</button></div>
      </header>
      <div className="content-grid">
        <section className="left-column">
          <article className="card items-card"><CardTitle icon={<Icon><path d="M5 8h14l1 13H4L5 8zM9 8V6a3 3 0 0 1 6 0v2"/></Icon>} trailing="1 item">Order Items</CardTitle>
            <div className="product-row"><div className="product-image"><img src="/suspension-kit.png" alt="Toyota Corolla front suspension kit" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=200&h=200&fit=crop' }}/></div><div className="product-info"><strong>Toyota Corolla 2016 Suspension Kit (Front)</strong><div className="tags"><span>Condition: New</span><span>OEM Part</span></div></div><div className="product-price"><strong>$245.00</strong><span>Qty: 1</span></div></div>
          </article>
          <article className="card logistics-card"><CardTitle icon={<Icon><path d="M3 7h12v11H3zM15 11h4l3 3v4h-7z"/><circle cx="7" cy="19" r="2"/><circle cx="18" cy="19" r="2"/></Icon>}>Shipping &amp; Logistics</CardTitle>
            <div className="shipping-meta"><div><span>CARRIER</span><strong>GIG Logistics</strong></div><div><span>TRACKING NUMBER</span><strong className="tracking">GIG-89302-XC <button onClick={() => {navigator.clipboard?.writeText('GIG-89302-XC');setCopied(true)}} aria-label="Copy tracking number">{copied ? '✓' : '▢'}</button></strong></div></div>
            <div className="timeline">{history.map(([title, desc, time, active]) => <div className={`timeline-row ${active ? 'current' : ''}`} key={title}><span className="timeline-dot">{active ? '' : '✓'}</span><div className="timeline-copy"><div><strong>{title}</strong><time>{time}</time></div><p>{desc}</p></div></div>)}</div>
          </article>
        </section>
        <aside className="right-column">
          <article className="card payment-card"><CardTitle icon={<Icon><path d="M4 4h16v16H4zM8 8h8M8 12h8M8 16h4"/><path d="M2 7v14h15"/></Icon>}>Payment Summary</CardTitle><div className="payment-lines"><div><span>Subtotal (1 item)</span><span>$245.00</span></div><div><span>Shipping</span><span>$25.00</span></div><div><span>Marketplace Fee (5%)</span><span>$12.25</span></div></div><div className="total-line"><strong>Total</strong><strong>$282.25</strong></div><button className="escrow-button"><Icon><path d="M4 10h16M6 10v9m4-9v9m4-9v9m4-9v9M3 20h18M12 3 3 8h18z"/></Icon>Escrow Details</button></article>
          <article className="card customer-card"><CardTitle icon={<Icon><circle cx="12" cy="8" r="3"/><path d="M5 20v-1a7 7 0 0 1 14 0v1z"/></Icon>}>Customer Information</CardTitle><div className="customer-summary"><div className="avatar">JD</div><div><strong>John Doe</strong><span>Buyer since Jan 2022</span></div></div><div className="contact-lines"><p><Icon><rect x="3" y="5" width="18" height="14"/><path d="m3 7 9 6 9-6"/></Icon>john.doe@example.com</p><p><Icon><path d="M5 3h4l2 5-3 2a15 15 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2z"/></Icon>+1 (555) 123-4567</p><p><Icon><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="2"/></Icon><span>123 Mechanic Lane, Suite 4<br/>Auto City, NY 10001</span></p></div></article>
          <article className="card vendor-card"><CardTitle icon={<Icon><path d="M3 10h18l-2-6H5zM5 10v10h14V10M9 20v-6h6v6"/></Icon>}>Vendor Information</CardTitle><div className="vendor-summary"><div className="vendor-logo">◉</div><div><strong>AutoParts Direct HQ</strong><span><b>★</b> 4.8 (1.2k reviews)</span></div></div><a href="#vendor" className="vendor-link"><Icon><path d="M3 8h18v12H3zM5 4h14v4H5zM8 12v3m4-3v3m4-3v3"/></Icon>View Vendor Profile</a></article>
        </aside>
      </div>
    </main>}
  </div>
}
export default App
