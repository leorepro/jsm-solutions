window.I18N_DATA = window.I18N_DATA || {};
window.I18N_DATA['en'] = {
  industries: {
    tech: {
      name: 'Technology & Telecom', en: 'Technology & Telecom',
      intro: 'Technology and telecom companies operate in fiercely competitive, fast-moving markets where speed is the key to winning. Teams must deliver outstanding customer service while maintaining complex infrastructure — and any outage or delayed response can directly hit customer experience and revenue.',
      products: [
        'AI-powered workflows, automation rules, and SLAs to reduce manual effort and speed up responses',
        'Incident management with AI summaries to quickly understand incidents and launch a response',
        'Change management that brings in development context, so you can deploy confidently and reduce release risk',
        'Centralized asset and configuration management for a full view of complex infrastructure',
        'An always-on AI virtual service agent that handles common requests like password resets'
      ],
      scenarios: [
        'Trigger incident workflows on network/service outages, with AI summaries for fast understanding and SLA-based recovery prioritization',
        'Build a customizable service desk and a value stream that "eliminates duplicate tasks"',
        'Map changes and incidents to the right devices and configurations for confident high-frequency releases',
        'Omnichannel customer service automation that handles common requests without manual effort'
      ],
      stat: 'Twitter reduced customer service email volume by 80% (email support share went from 95% to 15%)',
      clients: 'Twitter, Canva, Nextiva, Liberty Latin America'
    },
    finance: {
      name: 'Financial Services', en: 'Financial Services',
      intro: 'Financial services firms handle large volumes of sensitive customer data and transactions in a highly regulated environment, where any service disruption or data breach can lead to regulatory penalties and lost trust. Maintaining high availability and efficiency while meeting regulatory audit requirements is a core service management challenge.',
      products: [
        'Change and configuration management with audit visibility, leaving a traceable trail for every change',
        'Compliance certifications for financial regulations such as EBA and BaFin, with customizable workflows and SLAs',
        'Asset management to document, track ownership, and reduce costs',
        'Priority queues combining SLAs with AI triage to ensure critical financial requests are handled in real time',
        'AI automation of repetitive processes, strengthening clarity of communication and stakeholder alignment'
      ],
      scenarios: [
        'Centralize compliance requests once scattered across email using omnichannel and AI virtual agents',
        'Unified management of requests, incidents, and changes related to financial transactions',
        'Customer service, financial advisors, and compliance teams collaborating on one platform',
        'Build an easily customizable self-service portal for internal and external users to submit and track requests'
      ],
      stat: '50,000+ enterprises worldwide use Jira Service Management',
      clients: 'National Bank of Canada, EQ Bank, Kushki, Clip'
    },
    retail: {
      name: 'Retail & E-commerce', en: 'Retail & E-commerce',
      intro: 'Retail and e-commerce face peak-season traffic surges, omnichannel customer service consistency across online and in-store, and customer data protection. With an AI-powered service experience, JSM helps teams boost satisfaction and resolve issues faster while scaling.',
      products: [
        'Omnichannel AI virtual service agent support across online and in-store',
        'Asset and inventory management to track stock and equipment lifecycles',
        'AI automation workflows that automatically generate request types, rules, and project settings',
        'Priority queues combining SLAs with intelligent AI triage',
        'Incident management with AIOps capabilities to accelerate operational troubleshooting'
      ],
      scenarios: [
        'Unify customer service across channels (website, app, store), with AI plus a knowledge base for automatic replies',
        'Automatically handle high-frequency requests like password resets to free up staff',
        'Get real-time visibility into inventory, sales, and customer behavior data to accelerate decisions',
        'Use AIOps to quickly detect and resolve system failures during Double 11 / Black Friday peaks',
        'Dispatch and lifecycle management for in-store POS/terminal device failures'
      ],
      stat: 'The Very Group has averaged 4.9 / 5 satisfaction since going live',
      clients: 'The Very Group (Gartner ITSM Leader, Forrester ESM Leader)'
    },
    manufacturing: {
      name: 'Manufacturing', en: 'Manufacturing',
      intro: 'Manufacturing faces the high cost of production line downtime, the need for preventive equipment maintenance, and cross-team inventory and asset management. Enterprises need an interoperable system to standardize operations and connect R&D, support, and operations teams.',
      products: [
        'Asset management to track the ownership and lifecycle of assets/products/services',
        'Incident response (AIOps) connecting R&D, support, and operations teams',
        'Configuration management providing visibility into infrastructure and service dependencies',
        'Request management with an omnichannel AI virtual service agent',
        'AI automation combined with AI-triaged priority queues to ensure SLA attainment'
      ],
      scenarios: [
        'Avoid equipment failures and production line downtime through preventive maintenance',
        'Track and manage the inventory of assets, products, or services',
        'Collaborate across teams with comments, @mentions, and file sharing',
        'Manage requests, incidents, and changes in the same system',
        'Incident response for production line equipment failures — locating dependent assets and coordinating cross-team recovery'
      ],
      stat: 'More than 50,000 enterprises use Jira Service Management',
      clients: 'QAD, Lucid Motors, Saint-Gobain'
    }
  },
  faq: {
    schedule: [
      {
        q: 'What is happening to Opsgenie, and when will it affect users?',
        a: '<p>Since 2018, Atlassian has been working to integrate Opsgenie\'s features into its platform and products, helping Dev and IT teams collaborate more seamlessly.</p>' +
           '<ul>' +
           '<li><strong>✅ End of sale: from <span class="hl">June 4, 2025</span></strong>　Opsgenie can no longer be purchased (including direct purchases, reseller purchases, and upgrades/downgrades). Existing subscribers can still renew, only up until end of support.</li>' +
           '<li><strong>⛔ End of support: from <span class="hl">April 5, 2027</span></strong>　At that point, Opsgenie can no longer be logged into or used, and all un-migrated data will be deleted.</li>' +
           '</ul>' +
           '<p>This means all existing users must complete their migration before April 2027. With less than a year and a half until end of support, <span class="hl">you should start your assessment and planning now</span> to transition to Jira Service Management or Compass.</p>'
      },
      {
        q: 'How long does migration take? Will it affect usage?',
        a: '<p>Most migrations complete within an hour, and there\'s <span class="hl">no service disruption or downtime</span> during the process. That\'s because Opsgenie and Jira Service Management / Compass share the same backend architecture.</p>' +
           '<p>You can pick a migration date, and the system will automatically complete the data sync on that day. The entire migration is fast and stable, and won\'t affect notification delivery or user operations.</p>'
      },
      {
        q: 'After migrating, can I use Opsgenie and the new platform at the same time?',
        a: '<p>Yes. Atlassian has designed a parallel-use period of <span class="hl">up to 120 days</span>.</p>' +
           '<p>During this time, Opsgenie and Jira Service Management (or Compass) run simultaneously, giving you ample time to complete validation, testing, and user training.</p>' +
           '<p>You can shut down Opsgenie at any point during the parallel period, but if you don\'t manually shut it down within 120 days, the system will automatically terminate Opsgenie usage.</p>'
      },
      {
        q: 'What key dates should I be aware of for the migration?',
        a: '<p>Be sure to note the following two important dates:</p>' +
           '<ul>' +
           '<li><strong>June 4, 2025</strong>: Opsgenie stops new purchases, upgrades, downgrades, and new sites. After this date, you can only renew and add user seats.</li>' +
           '<li><strong>April 5, 2027</strong>: Opsgenie reaches end of support — you can no longer log in or access data, and all un-migrated account data will be deleted.</li>' +
           '</ul>' +
           '<p>The countdown has begun, so <span class="hl">you should start your migration assessment now</span> to leave enough time to complete validation and the transition.</p>'
      }
    ],
    tech: [
      {
        q: 'Where can Opsgenie users choose to migrate to?',
        a: '<p>You can choose to migrate to either of the following platforms:</p>' +
           '<ul>' +
           '<li><strong>Jira Service Management (JSM)</strong>: with full alerting and incident management capabilities</li>' +
           '<li><strong>Compass</strong>: providing alerting and on-call management</li>' +
           '</ul>' +
           '<p>The system, driven by the <strong>Opsgenie Owner</strong>, recommends the best migration path based on actual usage. For most users, the whole process is highly automated. (For where and how, see "How do I start my migration?" below.)</p>'
      },
      {
        q: 'What are the differences between Opsgenie, Jira Service Management, and Compass?',
        a: '<p>All three offer alerting and on-call, but they differ significantly in incident, change, and problem management:</p>' +
           '<div class="faq-table-wrap"><table class="faq-table">' +
             '<thead><tr><th>Feature</th><th>Opsgenie</th><th>JSM</th><th>Compass</th></tr></thead>' +
             '<tbody>' +
               '<tr><td>Alerting &amp; on-call</td><td class="yes">✓</td><td class="yes">✓</td><td class="yes">✓</td></tr>' +
               '<tr><td>Incident management</td><td class="yes">✓</td><td class="yes">✓</td><td class="no">✕</td></tr>' +
               '<tr><td>Change management</td><td class="no">✕</td><td class="yes">✓</td><td class="no">✕</td></tr>' +
               '<tr><td>Problem management</td><td class="no">✕</td><td class="yes">✓</td><td class="no">✕</td></tr>' +
             '</tbody>' +
           '</table></div>' +
           '<p>For a detailed feature comparison, see the official Atlassian documentation: Feature changes and deprecations in Jira Service Management / Compass.</p>'
      },
      {
        q: 'My Opsgenie and JSM are in different organizations — can I migrate?',
        a: '<p>Currently the migration tool only supports migration within the same organization. If Opsgenie and JSM are not on the same site, we recommend letting the Titansoft team know so we can contact Atlassian support to help move the accounts.</p>' +
           '<p>Once the move is complete, you can use the migration tool to finish the subsequent automatic migration setup.</p>'
      },
      {
        q: 'How do I start my migration?',
        a: '<p>Have an administrator with Opsgenie Owner permissions go to <code>Settings &gt; Migrate Opsgenie</code>, and the system will guide you to:</p>' +
           '<ul>' +
           '<li>Choose the migration platform (JSM or Compass)</li>' +
           '<li>Preview pricing and plans</li>' +
           '<li>After confirming billing and plan, choose an execution date</li>' +
           '</ul>' +
           '<p>⚠️ If your site has special circumstances, you may not be able to schedule the migration immediately — please contact us and we\'ll help confirm with Atlassian.</p>'
      },
      {
        q: 'How long does it take to migrate from Opsgenie to JSM or Compass?',
        a: '<ul>' +
           '<li>Once the Owner initiates the migration, the system automatically syncs most settings and data.</li>' +
           '<li>The following prerequisites must be met first: specify the migration product and plan, and have the billing admin approve the new costs.</li>' +
           '<li>The system performs the data migration on the date you choose.</li>' +
           '</ul>' +
           '<p>⚠️ In some cases manual steps are still required, and guidance documents will be provided to help you complete them.</p>'
      },
      {
        q: 'Can JSM meet our alerting and on-call needs?',
        a: '<p>Jira Service Management supports:</p>' +
           '<ul>' +
           '<li>Collecting alerts from sources such as Email, Webhook, and custom APIs</li>' +
           '<li>Automatic notifications (push, Email, SMS, voice) with escalation</li>' +
           '<li>Detailed audit logs recording notification delivery and response times</li>' +
           '</ul>' +
           '<p>These are equivalent to — and even more complete than — the alerting and on-call capabilities you previously used in Opsgenie.</p>'
      },
      {
        q: 'Can I choose my own migration date?',
        a: '<p>Yes.</p>' +
           '<p>Once you\'ve confirmed the plan and approved the costs, the system lets you specify a migration date, on which it will automatically sync most settings and data.</p>'
      },
      {
        q: 'Is the migration fully automatic? What do I need to do?',
        a: '<p>Most settings and data are moved automatically, but as the "Opsgenie Owner" and "site admin" roles you still need to:</p>' +
           '<ul>' +
           '<li>Specify the product and plan to migrate to</li>' +
           '<li>Have the billing admin confirm the costs and billing period</li>' +
           '<li>Set the migration execution date</li>' +
           '</ul>' +
           '<p>Some special settings still require manual handling, and the platform will provide documentation.</p>'
      },
      {
        q: 'Which settings need to be handled manually after migration?',
        a: '<p>Most settings are moved automatically, but the following items need to be completed manually:</p>' +
           '<ul>' +
           '<li>Certain integrations (such as non-native ones)</li>' +
           '<li>Notification rules</li>' +
           '<li>Phone and contact information</li>' +
           '</ul>' +
           '<p>The system provides a checklist and progress tracking to help you complete the setup.</p>'
      },
      {
        q: 'Can I try Jira Service Management or Compass before migrating?',
        a: '<ul>' +
           '<li>Before initiating the migration, you can start a trial of the migration product Atlassian recommends.</li>' +
           '<li>Go to <code>Settings &gt; Migrate Opsgenie</code> to see the recommended target.</li>' +
           '<li>After initiating the migration, you can also open a temporary trial account for the transition.</li>' +
           '</ul>' +
           '<p>📌 To trial the Enterprise plan, feel free to <a href="https://tsgojira.atlassian.net/servicedesk/customer/portal/4/group/8/create/43" target="_blank" rel="noopener">contact Titansoft</a> directly, and we\'ll help you submit the request.</p>'
      },
      {
        q: 'I\'m a Jira Service Management Data Center customer — what should I do?',
        a: '<p>Opsgenie is a cloud service and <strong>has no Data Center version</strong>.</p>' +
           '<p>If you currently use Jira Service Management Data Center, please complete one of the following migration options before April 2027:</p>' +
           '<ul>' +
           '<li>First migrate JSM Data Center to Cloud, then migrate Opsgenie into Cloud JSM</li>' +
           '<li>Migrate Opsgenie to a brand-new Compass site</li>' +
           '<li>Migrate Opsgenie to a brand-new JSM Cloud site</li>' +
           '</ul>' +
           '<p>You can view the recommended migration path and detailed steps in <code>Settings &gt; Migrate Opsgenie</code>.</p>'
      }
    ],
    billing: [
      {
        q: 'What will the price be after migration?',
        a: '<p>In <code>Settings &gt; Migrate Opsgenie</code> you can:</p>' +
           '<ul>' +
           '<li>See the cost of the recommended platform and corresponding plan</li>' +
           '<li>Compare feature differences between editions</li>' +
           '<li>Choose the plan that best fits your needs</li>' +
           '</ul>' +
           '<p>If the migration causes costs to rise, some users may qualify for a limited-time discount.</p>'
      },
      {
        q: 'What happens to my original contract after migration?',
        a: '<ul>' +
           '<li>Your contract remains in effect until the subscription ends or April 5, 2027</li>' +
           '<li>From June 4, 2025, you cannot upgrade/downgrade, change editions, or add sites</li>' +
           '<li>You can still purchase additional seats until end of support</li>' +
           '</ul>'
      },
      {
        q: 'If I migrate during my subscription period, how is the remaining cost handled?',
        a: '<p><strong>Annual customers:</strong></p>' +
           '<ul>' +
           '<li>If <strong>Opsgenie and the target product are not on the same site</strong>, and there are &gt; 30 days remaining in the subscription:<br>→ The system automatically converts the remaining time into the new product\'s usage period</li>' +
           '<li>If <strong>the target product is on the same site as Opsgenie</strong>:<br>→ Titansoft will help you contact Atlassian support or a sales representative to discuss refunds</li>' +
           '</ul>' +
           '<p><strong>Monthly customers:</strong> Billed monthly, so there\'s <span class="hl">no "remaining-month refund" issue</span>. You can cancel Opsgenie at any time, and billing stops at the end of the current billing cycle after cancellation.</p>'
      }
    ]
  }
};
window.I18N_DATA['en'].ui = { indProducts: 'Applicable Capabilities', indScenarios: 'Use Cases', indClients: 'Key customers: ' };
