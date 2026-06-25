window.I18N_DATA = window.I18N_DATA || {};
window.I18N_DATA['en'] = {
  industries: {
    tech: {
      name: 'Technology & Telecom', en: 'Technology & Telecom',
      intro: 'Technology and telecom companies operate in fiercely competitive, fast-moving markets where speed is the key to winning. Teams have to deliver outstanding customer service while running complex infrastructure—and any outage or delayed response can hit customer experience and revenue directly.',
      products: [
        'AI-powered workflows, automation rules and SLAs that cut manual effort and speed up responses',
        'Incident management with AI summaries to grasp incidents fast and kick off a response',
        'Change management enriched with development context, so you can deploy with confidence and reduce release risk',
        'Centralized asset and configuration management for full visibility into complex infrastructure',
        'An always-on AI virtual service agent that automatically handles common requests like password resets'
      ],
      scenarios: [
        'Trigger an incident workflow when a network or service goes down, use AI summaries to get up to speed fast, and prioritize recovery by SLA',
        'Build a customizable service desk and value streams that eliminate repetitive tasks',
        'Map changes and incidents to the right devices and configurations for confident, high-frequency releases',
        'Automate omnichannel customer service so common requests are handled without manual effort'
      ],
      stat: 'Twitter cut customer service email volume by 80% (email support share dropped from 95% to 15%)',
      clients: 'Twitter, Canva, Nextiva, Liberty Latin America'
    },
    finance: {
      name: 'Financial Services', en: 'Financial Services',
      intro: 'Financial services firms handle large volumes of sensitive customer data and transactions in a heavily regulated environment, where any service disruption or data breach can lead to regulatory penalties and a loss of trust. Maintaining high availability and efficiency while staying compliant and audit-ready is a core service management challenge.',
      products: [
        'Change and configuration management with audit visibility, leaving a traceable trail for every change',
        'Compliance certifications for financial regulations such as EBA and BaFin, with customizable workflows and SLAs',
        'Asset management to document assets, track ownership and reduce costs',
        'SLA-driven priority queues with AI triage to ensure critical financial requests are handled instantly',
        'AI automation of repetitive processes that improves communication clarity and stakeholder alignment'
      ],
      scenarios: [
        'Centralize compliance requests once scattered across email using omnichannel intake and an AI virtual agent',
        'Manage requests, incidents and changes related to financial transactions in one place',
        'Bring customer service, financial advisors and compliance teams together on a single platform',
        'Stand up an easily customizable self-service portal so internal and external users can submit and track requests themselves'
      ],
      stat: '50,000+ companies worldwide use Jira Service Management',
      clients: 'National Bank of Canada, EQ Bank, Kushki, Clip'
    },
    retail: {
      name: 'Retail & E-commerce', en: 'Retail & E-commerce',
      intro: 'Retail and e-commerce teams face peak seasonal traffic, the need for consistent omnichannel service across online and in-store, and the challenge of protecting customer data. With AI-powered service experiences, JSM helps teams scale while raising satisfaction and resolving issues faster.',
      products: [
        'Omnichannel AI virtual service agent support across online and in-store',
        'Asset and inventory management to track stock and equipment lifecycles',
        'AI automation of workflows that auto-generates request types, rules and project setup',
        'SLA-driven priority queues with smart AI triage',
        'Incident management with AIOps to speed up operational troubleshooting'
      ],
      scenarios: [
        'Unify customer service across channels (website, app, in-store), with AI plus the knowledge base answering automatically',
        'Automatically handle high-frequency requests like password resets to free up staff',
        'Get real-time visibility into inventory, sales and customer behavior data to make faster decisions',
        'Quickly detect and resolve system failures during peak events like Singles’ Day and Black Friday using AIOps',
        'Dispatch and lifecycle management for in-store POS and terminal device failures'
      ],
      stat: 'The Very Group has averaged 4.9 / 5 satisfaction since going live',
      clients: 'The Very Group (Gartner ITSM Leader, Forrester ESM Leader)'
    },
    manufacturing: {
      name: 'Manufacturing', en: 'Manufacturing',
      intro: 'Manufacturers face the high cost of production line downtime, the need for preventive equipment maintenance, and inventory and asset management across teams. They need an interoperable system to standardize operations and connect R&D, support and operations teams.',
      products: [
        'Asset management to track the ownership and lifecycle of assets, products and services',
        'Incident response (AIOps) that connects R&D, support and operations teams',
        'Configuration management for visibility into infrastructure and service dependencies',
        'Request management with an omnichannel AI virtual service agent',
        'AI automation combined with AI-triaged priority queues to ensure SLAs are met'
      ],
      scenarios: [
        'Prevent equipment failures and production line downtime through preventive maintenance',
        'Track and manage inventory of assets, products or services',
        'Collaborate across teams with comments, @mentions and file sharing',
        'Manage requests, incidents and changes in a single system',
        'Respond to production equipment failures—pinpoint dependent assets and coordinate cross-team recovery'
      ],
      stat: 'More than 50,000 companies use Jira Service Management',
      clients: 'QAD, Lucid Motors, Saint-Gobain'
    }
  },
  faq: {
    schedule: [
      {
        q: 'What’s happening with Opsgenie, and when does it affect users?',
        a: '<p>Since 2018, Atlassian has been working to integrate Opsgenie’s capabilities into its platform and products, helping Dev and IT teams collaborate more seamlessly.</p>' +
           '<ul>' +
           '<li><strong>✅ End of sale: from <span class="hl">June 4, 2025</span></strong>　Opsgenie can no longer be purchased (including direct purchase, reseller, and version upgrades/downgrades). Existing subscribers can still renew, but only until end of support.</li>' +
           '<li><strong>⛔ End of support: from <span class="hl">April 5, 2027</span></strong>　At that point Opsgenie can no longer be logged into or used, and all unmigrated data will be deleted.</li>' +
           '</ul>' +
           '<p>This means all existing users must complete their migration before April 2027. With less than a year and a half until end of support, <span class="hl">you should start your assessment and planning now</span> and move to Jira Service Management or Compass.</p>'
      },
      {
        q: 'How long does migration take? Will it affect usage?',
        a: '<p>Most migrations take only a few minutes, with <span class="hl">no service disruption or downtime</span> during the process. That’s because Opsgenie and Jira Service Management / Compass share the same backend architecture.</p>' +
           '<p>You can choose a migration date, and the system will automatically sync your data on that day. The whole migration is fast and stable, with no impact on notification delivery or user operations.</p>'
      },
      {
        q: 'After migrating, can I use Opsgenie and the new platform at the same time?',
        a: '<p>Yes. Atlassian has designed a parallel-use period of up to <span class="hl">120 days</span>.</p>' +
           '<p>During this period, Opsgenie and Jira Service Management (or Compass) run side by side, giving you ample time to complete validation, testing and user training.</p>' +
           '<p>You can shut down Opsgenie at any point during the parallel period, but if you don’t do so manually within 120 days, the system will automatically end Opsgenie use.</p>'
      },
      {
        q: 'What key dates should I watch out for during migration?',
        a: '<p>Be sure to keep these two important dates in mind:</p>' +
           '<ul>' +
           '<li><strong>June 4, 2025</strong>: Opsgenie stops new purchases, upgrades, downgrades and adding sites. After this date, only renewals and adding more user seats are allowed.</li>' +
           '<li><strong>April 5, 2027</strong>: Opsgenie support ends—no more logging in or accessing data, and all unmigrated account data is deleted.</li>' +
           '</ul>' +
           '<p>The countdown is now on, so <span class="hl">you should start your migration assessment immediately</span> to leave enough time for validation and transition.</p>'
      }
    ],
    tech: [
      {
        q: 'Where can Opsgenie users migrate to?',
        a: '<p>You can choose to migrate to either of the following platforms:</p>' +
           '<ul>' +
           '<li><strong>Jira Service Management (JSM)</strong>: full alerting and incident management capabilities</li>' +
           '<li><strong>Compass</strong>: provides alerting and on-call management</li>' +
           '</ul>' +
           '<p>The <strong>Opsgenie Owner</strong> will be guided to the recommended migration path based on actual usage, and for most users the entire process is highly automated. (See “How do I get started with migration?” below for where and how to do this.)</p>'
      },
      {
        q: 'What’s the difference between Opsgenie, Jira Service Management and Compass?',
        a: '<p>All three offer alerting and on-call scheduling, but they differ significantly in incident, change and problem management:</p>' +
           '<div class="faq-table-wrap"><table class="faq-table">' +
             '<thead><tr><th>Feature</th><th>Opsgenie</th><th>JSM</th><th>Compass</th></tr></thead>' +
             '<tbody>' +
               '<tr><td>Alerting &amp; on-call scheduling</td><td class="yes">✓</td><td class="yes">✓</td><td class="yes">✓</td></tr>' +
               '<tr><td>Incident management</td><td class="yes">✓</td><td class="yes">✓</td><td class="no">✕</td></tr>' +
               '<tr><td>Change management</td><td class="no">✕</td><td class="yes">✓</td><td class="no">✕</td></tr>' +
               '<tr><td>Problem management</td><td class="no">✕</td><td class="yes">✓</td><td class="no">✕</td></tr>' +
             '</tbody>' +
           '</table></div>' +
           '<p>For a detailed feature comparison, see the official Atlassian docs: Feature changes and deprecations in Jira Service Management / Compass.</p>'
      },
      {
        q: 'My Opsgenie and JSM are in different organizations—can I still migrate?',
        a: '<p>Currently the migration tool only supports migrations within the same organization. If your Opsgenie and JSM are not on the same site, we recommend letting the Titansoft team know so we can contact Atlassian support to help move your account.</p>' +
           '<p>Once the move is complete, you can use the migration tool to finish the rest of the automated migration setup.</p>'
      },
      {
        q: 'How do I get started with migration?',
        a: '<p>An admin with Opsgenie Owner permissions should go to <code>Settings &gt; Migrate Opsgenie</code>, where the system will guide you to:</p>' +
           '<ul>' +
           '<li>Choose a migration platform (JSM or Compass)</li>' +
           '<li>Preview pricing and plans</li>' +
           '<li>Confirm billing and plan, then choose an execution date</li>' +
           '</ul>' +
           '<p>⚠️ If your site has special circumstances, you may not be able to schedule the migration right away—please contact us and we’ll help confirm with Atlassian.</p>'
      },
      {
        q: 'How long does migrating from Opsgenie to JSM or Compass take?',
        a: '<ul>' +
           '<li>Once the owner starts the migration, the system automatically syncs most settings and data.</li>' +
           '<li>The following conditions must be met first: specify the target product and plan, and have the billing admin approve the new pricing.</li>' +
           '<li>The system runs the data migration on the date you choose.</li>' +
           '</ul>' +
           '<p>⚠️ Some cases still require manual steps, and guidance documents will be provided at that point to help you complete them.</p>'
      },
      {
        q: 'Will JSM meet our alerting and on-call needs?',
        a: '<p>Jira Service Management supports:</p>' +
           '<ul>' +
           '<li>Collecting alerts from sources like Email, Webhook and custom APIs</li>' +
           '<li>Automatic notifications (push, Email, SMS, voice) with escalation</li>' +
           '<li>Detailed audit logs that record notification delivery and response times</li>' +
           '</ul>' +
           '<p>These capabilities are equivalent to—if not more complete than—the alerting and on-call you used in Opsgenie.</p>'
      },
      {
        q: 'Can I choose my own migration date?',
        a: '<p>Yes.</p>' +
           '<p>Once you’ve confirmed your plan and approved the pricing, the system lets you specify a migration date, on which it will automatically sync most settings and data.</p>'
      },
      {
        q: 'Is migration fully automatic? What do I need to do?',
        a: '<p>Most settings and data are migrated automatically, but in the roles of “Opsgenie Owner” and “site admin” you still need to:</p>' +
           '<ul>' +
           '<li>Specify the product and plan to migrate to</li>' +
           '<li>Have the billing admin confirm pricing and billing period</li>' +
           '<li>Set the migration execution date</li>' +
           '</ul>' +
           '<p>Some special configurations still need manual handling, and the platform will provide documentation.</p>'
      },
      {
        q: 'Which settings need to be handled manually after migration?',
        a: '<p>Most settings are migrated automatically, but the following need to be completed manually:</p>' +
           '<ul>' +
           '<li>Certain integrations (such as non-native integrations)</li>' +
           '<li>Notification rules</li>' +
           '<li>Phone and contact information</li>' +
           '</ul>' +
           '<p>The system provides a checklist and progress tracking to help you complete the setup.</p>'
      },
      {
        q: 'Can I try out Jira Service Management or Compass before migrating?',
        a: '<ul>' +
           '<li>Before starting the migration, you can begin a trial of the migration product Atlassian recommends.</li>' +
           '<li>Go to <code>Settings &gt; Migrate Opsgenie</code> to see the recommended target.</li>' +
           '<li>After starting the migration, you can also open a temporary trial account for the transition.</li>' +
           '</ul>' +
           '<p>📌 To trial the Enterprise edition, you need to submit a request via <a href="https://support.atlassian.com/contact" target="_blank" rel="noopener">support.atlassian.com/contact</a>.</p>'
      },
      {
        q: 'I’m a Jira Service Management Data Center customer—what should I do?',
        a: '<p>Opsgenie is a cloud-only service with <strong>no Data Center version</strong>.</p>' +
           '<p>If you currently use Jira Service Management Data Center, complete one of the following migration options before April 2027:</p>' +
           '<ul>' +
           '<li>Migrate JSM Data Center to Cloud first, then migrate Opsgenie into Cloud JSM</li>' +
           '<li>Migrate Opsgenie to a brand-new Compass site</li>' +
           '<li>Migrate Opsgenie to a brand-new JSM Cloud site</li>' +
           '</ul>' +
           '<p>You can view the recommended migration path and detailed steps under <code>Settings &gt; Migrate Opsgenie</code>.</p>'
      }
    ],
    billing: [
      {
        q: 'What will the pricing be after migration?',
        a: '<p>Under <code>Settings &gt; Migrate Opsgenie</code>, you can:</p>' +
           '<ul>' +
           '<li>See the pricing of the recommended platform and corresponding plan</li>' +
           '<li>Compare feature differences across editions</li>' +
           '<li>Choose the plan that best fits your needs</li>' +
           '</ul>' +
           '<p>If migration increases your costs, some users may qualify for a limited-time discount.</p>'
      },
      {
        q: 'What happens to my original contract after migration?',
        a: '<ul>' +
           '<li>Your contract stays in effect until the subscription ends or April 5, 2027</li>' +
           '<li>From June 4, 2025, you can no longer upgrade, downgrade, change editions or add sites</li>' +
           '<li>You can still purchase additional seats until end of support</li>' +
           '</ul>'
      },
      {
        q: 'If I migrate mid-subscription, how is the remaining cost handled?',
        a: '<p><strong>Annual customers:</strong></p>' +
           '<ul>' +
           '<li>If <strong>Opsgenie and the target product are not on the same site</strong> and there are &gt; 30 days of subscription remaining:<br>→ The system automatically converts the remaining time into the new product’s subscription period</li>' +
           '<li>If <strong>the target product is on the same site as Opsgenie</strong>:<br>→ Titansoft will help you contact Atlassian support or a sales representative to discuss a refund</li>' +
           '</ul>' +
           '<p><strong>Monthly customers:</strong> Billed monthly, so <span class="hl">there’s no question of a “remaining-month refund.”</span> You can cancel Opsgenie at any time, and after canceling, billing stops at the end of that month’s billing cycle.</p>'
      }
    ]
  }
};
