<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into your Astro static portfolio site. PostHog is initialized via a reusable `src/components/posthog.astro` component (using the `is:inline` directive to prevent TypeScript errors) which is imported and rendered inside the `<head>` of your existing `src/layouts/Layout.astro`. Environment variables (`PUBLIC_POSTHOG_KEY`, `PUBLIC_POSTHOG_HOST`) are stored in `.env` and referenced at build time — no keys are hardcoded. Seven custom events are captured across five files, tracking navigation interest, external link engagement, contact intent, theme preferences, and project curiosity.

| Event                        | Description                                                                                               | File                                                                                |
| ---------------------------- | --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `navigation_link_clicked`    | User clicked a nav link in the sidebar or mobile header (includes `label`, `href`, `location` properties) | `src/components/navigation/Sidebar.astro`, `src/components/navigation/Header.astro` |
| `external_link_clicked`      | User clicked an outbound link (Redbubble, Instagram, TechCrunch) from the portfolio                       | `src/components/Welcome.astro`                                                      |
| `contact_email_clicked`      | User clicked the email contact link in the Contact section                                                | `src/components/Welcome.astro`                                                      |
| `contact_social_clicked`     | User clicked a social profile link (LinkedIn, GitHub, Redbubble) in the Contact section                   | `src/components/Welcome.astro`                                                      |
| `theme_toggled`              | User toggled the dark/light theme preference (includes resulting `theme` value)                           | `src/components/ThemeIcon.astro`                                                    |
| `project_repository_clicked` | User clicked the GitHub repository link for the TypeORM Entity Factory project                            | `src/components/Welcome.astro`                                                      |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- 📊 **Dashboard — Analytics basics**: https://us.posthog.com/project/320877/dashboard/1299876
- 📈 **Portfolio Engagement Overview** (daily trend of all key events): https://us.posthog.com/project/320877/insights/wr92Uo0w
- 🔽 **Visitor → Contact Conversion Funnel** (navigation → email contact): https://us.posthog.com/project/320877/insights/k9XT3Xzv
- 🔗 **Most Popular Navigation Links** (which sections get the most clicks): https://us.posthog.com/project/320877/insights/ou1GUuGQ
- 🌙 **Theme Toggle Usage** (dark vs. light mode preference): https://us.posthog.com/project/320877/insights/AjxuLLJz
- 🌐 **External Outbound Clicks** (external links + project repo visits): https://us.posthog.com/project/320877/insights/g95HfsMd

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/posthog-integration-astro-static/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
