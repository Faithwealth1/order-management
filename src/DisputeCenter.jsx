import { useState } from 'react'

const cases = [
  { id: '#DSP-8492', reason: 'Item not as described', order: 'Ord: #ORD-991A', priority: 'High', status: 'Awaiting Admin' },
  { id: '#DSP-8491', reason: 'Damaged in transit', order: 'Ord: #ORD-882B', priority: 'Normal', status: 'Evidence Review' },
  { id: '#DSP-8490', reason: 'Never received', order: 'Ord: #ORD-773C', priority: 'Normal', status: 'Resolved' },
  { id: '#DSP-8489', reason: 'Counterfeit claim', order: 'Ord: #ORD-664D', priority: 'High', status: 'Awaiting Admin' },
]

function DisputeCenter() {
  const [selectedCase, setSelectedCase] = useState(cases[0])
  const [search, setSearch] = useState('')
  const [activeTab, setActiveTab] = useState('Evidence')
  const filteredCases = cases.filter((item) => item.id.toLowerCase().includes(search.toLowerCase()))

  return (
    <section className="dispute-main">
      <header className="dispute-header">
        <div>
          <h1>Dispute Resolution Center</h1>
          <p>Manage and resolve active buyer-seller conflicts.</p>
        </div>
        <div className="dispute-tools">
          <button type="button">Filter <span>☷</span></button>
          <button type="button">Export <span>⇩</span></button>
        </div>
      </header>

      <div className="dispute-layout">
        <aside className="case-list">
          <div className="case-list-head">
            <strong>Active Cases (24)</strong>
            <input aria-label="Search case ID" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search ID..." />
          </div>
          <div className="case-items">
            {filteredCases.map((item) => (
              <button type="button" key={item.id} onClick={() => setSelectedCase(item)} className={`case-item ${selectedCase.id === item.id ? 'case-active' : ''}`}>
                <span className="case-id-row"><strong>{item.id}</strong><span className={`priority ${item.priority === 'High' ? 'priority-high' : ''}`}>{item.priority}</span></span>
                <span className="case-subject">{item.reason}</span>
                <span className="case-foot"><span>{item.order}</span><span className={item.status === 'Awaiting Admin' ? 'awaiting' : ''}>{item.status}</span></span>
              </button>
            ))}
            {filteredCases.length === 0 && <p className="no-cases">No matching cases.</p>}
          </div>
        </aside>

        <article className="case-detail">
          <div className="detail-summary">
            <div className="detail-heading">
              <div><h2>Case {selectedCase.id}</h2><span className={`detail-priority ${selectedCase.priority === 'High' ? 'priority-high' : ''}`}>{selectedCase.priority} Priority</span></div>
              <p>Reason: {selectedCase.id === '#DSP-8492' ? 'Item not as described (Missing components)' : selectedCase.reason}</p>
            </div>
            <div className="order-total"><strong>Order {selectedCase.order.replace('Ord: ', '')}</strong><span>Amount: $450.00</span></div>
            <div className="participants">
              <div><small>Buyer</small><strong>♟ &nbsp;John Doe (jdoe@example.com)</strong></div>
              <div><small>Seller</small><strong>▦ &nbsp;Apex Auto Parts</strong></div>
            </div>
          </div>

          <nav className="detail-tabs" aria-label="Case details">
            {['Evidence', 'Chat Log (4)'].map((tab) => <button type="button" key={tab} onClick={() => setActiveTab(tab)} className={activeTab === tab ? 'tab-active' : ''}>{tab}</button>)}
          </nav>

          {activeTab === 'Evidence' ? <div className="evidence-list">
            <div className="evidence-card">
              <p className="evidence-quote">"The alternator arrived but is missing the mounting bracket and the pulley is clearly bent, unlike the photos in the listing."</p>
              <div className="evidence-bottom"><div className="evidence-images">
                <img src="/dispute-evidence/buyer-alternator.png" alt="Buyer evidence showing the damaged alternator" />
                <img src="/dispute-evidence/buyer-detail.png" alt="Close view of the alternator" />
              </div><div className="evidence-author"><small>Buyer</small><strong>♟ &nbsp;John Doe (jdoe@example.com)</strong></div></div>
            </div>
            <div className="evidence-card">
              <p className="evidence-quote">"The item was shipped in perfect condition with all brackets attached. See our shipping dock photos taken right before boxing."</p>
              <div className="evidence-bottom"><div className="evidence-images">
                <img src="/dispute-evidence/seller-dispatch.png" alt="Seller dispatch photo of the alternator" />
                <img src="/dispute-evidence/seller-package.png" alt="Seller package before shipping" />
              </div><div className="evidence-author"><small>Seller</small><strong>▦ &nbsp;Apex Auto Parts</strong></div></div>
            </div>
          </div> : <div className="chat-log">
            <p><strong>John Doe · Buyer</strong><span>The alternator arrived with missing components. I have uploaded photos for review.</span></p>
            <p><strong>Apex Auto Parts · Seller</strong><span>We packed the item with all listed components and included photos from dispatch.</span></p>
            <p><strong>John Doe · Buyer</strong><span>The mounting bracket was not in the box, and the pulley appears bent.</span></p>
            <p><strong>Admin</strong><span>Thank you. The evidence is under review.</span></p>
          </div>}

          <footer className="case-actions">
            <button type="button">Request<br />More Info</button>
            <button type="button" className="settle-seller">Settle for<br />Seller</button>
            <button type="button" className="split-settlement">Split<br />Settlement</button>
            <button type="button" className="settle-buyer">Settle for<br />Buyer</button>
            <span>Admin Action<br />Required</span>
          </footer>
        </article>
      </div>
    </section>
  )
}

export default DisputeCenter
