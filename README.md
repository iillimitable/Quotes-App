flowchart TD

subgraph group_client["Client Experience"]
  node_web_app["Web App<br/>[App.jsx]"]
  node_auth_state["Auth State<br/>[AuthContext.jsx]"]
  node_report_form["Safety Report<br/>[ReportForm.jsx]"]
  node_safety_dashboard["Safety Dashboard<br/>[Dashboard.jsx]"]
  node_incident_map["Incident Map<br/>[Incidents.jsx]"]
  node_incident_form["Incident Submission<br/>[PostIncident.jsx]"]
  node_feedback_form["Feedback Form<br/>[Feedback.jsx]"]
end

subgraph group_api["API Services"]
  node_api_server["Express API<br/>[index.js]"]
  node_auth_routes["Auth Routes<br/>[auth.js]"]
  node_report_routes["Report Routes<br/>[reports.js]"]
  node_incident_routes["Incident Routes<br/>[incidents.js]"]
  node_feedback_routes["Feedback Routes<br/>[feedback.js]"]
  node_auth_middleware["JWT Middleware<br/>[auth.js]"]
end

subgraph group_safety["Safety Processing"]
  node_scoring["Safety Scoring<br/>[scoring.js]"]
end

subgraph group_moderation["Admin Moderation"]
  node_admin_panel["Admin Panel<br/>[AdminPanel.jsx]"]
  node_user_activity["User Activity<br/>[UserDetail.jsx]"]
  node_incident_review["Incident Review"]
  node_report_review["Report Review"]
  node_feedback_review["Feedback Review"]
  node_admin_routes["Admin Routes<br/>[admin.js]"]
  node_admin_middleware["Admin Middleware<br/>[admin.js]"]
end

subgraph group_data["Persistence"]
  node_user_model[("User Records<br/>[User.js]")]
  node_report_model[("Safety Reports<br/>[Report.js]")]
  node_incident_model[("Incident Records<br/>[Incident.js]")]
  node_feedback_model[("Feedback Records<br/>[Feedback.js]")]
  node_mongodb[("MongoDB")]
end

node_community_user(("Community User"))
node_admin_user(("Administrator"))

node_community_user -->|"uses"| node_web_app
node_admin_user -->|"uses"| node_web_app
node_web_app -->|"provides auth"| node_auth_state
node_web_app -->|"routes to"| node_report_form
node_web_app -->|"routes to"| node_safety_dashboard
node_web_app -->|"routes to"| node_incident_map
node_web_app -->|"routes to"| node_incident_form
node_web_app -->|"routes to"| node_feedback_form
node_web_app -->|"routes to"| node_admin_panel
node_auth_state -->|"calls API"| node_auth_routes
node_report_form -->|"submits report"| node_report_routes
node_safety_dashboard -->|"searches reports"| node_report_routes
node_incident_map -->|"loads incidents"| node_incident_routes
node_incident_form -->|"posts incident"| node_incident_routes
node_feedback_form -->|"submits feedback"| node_feedback_routes
node_admin_panel -->|"opens console"| node_admin_routes
node_user_activity -->|"loads activity"| node_admin_routes
node_incident_review -->|"moderates incidents"| node_admin_routes
node_report_review -->|"moderates reports"| node_admin_routes
node_feedback_review -->|"reviews feedback"| node_admin_routes
node_api_server -->|"mounts routes"| node_auth_routes
node_api_server -->|"mounts routes"| node_report_routes
node_api_server -->|"mounts routes"| node_incident_routes
node_api_server -->|"mounts routes"| node_feedback_routes
node_api_server -->|"mounts routes"| node_admin_routes
node_auth_routes -->|"verifies token"| node_auth_middleware
node_report_routes -->|"verifies token"| node_auth_middleware
node_incident_routes -->|"verifies token"| node_auth_middleware
node_admin_routes -->|"verifies token"| node_auth_middleware
node_admin_routes -->|"checks role"| node_admin_middleware
node_report_routes -->|"calculates score"| node_scoring
node_auth_routes -->|"reads writes"| node_user_model
node_report_routes -->|"reads writes"| node_report_model
node_incident_routes -->|"reads writes"| node_incident_model
node_feedback_routes -->|"writes feedback"| node_feedback_model
node_admin_routes -->|"manages users"| node_user_model
node_admin_routes -->|"manages reports"| node_report_model
node_admin_routes -->|"manages incidents"| node_incident_model
node_admin_routes -->|"manages feedback"| node_feedback_model
node_user_model -->|"persists users"| node_mongodb
node_report_model -->|"persists reports"| node_mongodb
node_incident_model -->|"persists incidents"| node_mongodb
node_feedback_model -->|"persists feedback"| node_mongodb

click node_web_app "https://github.com/iillimitable/safe/blob/main/safe-map/frontend/src/App.jsx"
click node_auth_state "https://github.com/iillimitable/safe/blob/main/safe-map/frontend/src/context/AuthContext.jsx"
click node_report_form "https://github.com/iillimitable/safe/blob/main/safe-map/frontend/src/pages/ReportForm.jsx"
click node_safety_dashboard "https://github.com/iillimitable/safe/blob/main/safe-map/frontend/src/pages/Dashboard.jsx"
click node_incident_map "https://github.com/iillimitable/safe/blob/main/safe-map/frontend/src/pages/Incidents.jsx"
click node_incident_form "https://github.com/iillimitable/safe/blob/main/safe-map/frontend/src/pages/PostIncident.jsx"
click node_feedback_form "https://github.com/iillimitable/safe/blob/main/safe-map/frontend/src/pages/Feedback.jsx"
click node_admin_panel "https://github.com/iillimitable/safe/blob/main/safe-map/frontend/src/pages/Admin/AdminPanel.jsx"
click node_user_activity "https://github.com/iillimitable/safe/blob/main/safe-map/frontend/src/pages/Admin/UserDetail.jsx"
click node_incident_review "https://github.com/iillimitable/safe/blob/main/safe-map/frontend/src/pages/Admin/IncidentManagement.jsx"
click node_report_review "https://github.com/iillimitable/safe/blob/main/safe-map/frontend/src/pages/Admin/ReportManagement.jsx"
click node_feedback_review "https://github.com/iillimitable/safe/blob/main/safe-map/frontend/src/pages/Admin/FeedbackManagement.jsx"
click node_api_server "https://github.com/iillimitable/safe/blob/main/safe-map/src/index.js"
click node_auth_routes "https://github.com/iillimitable/safe/blob/main/safe-map/src/routes/auth.js"
click node_report_routes "https://github.com/iillimitable/safe/blob/main/safe-map/src/routes/reports.js"
click node_incident_routes "https://github.com/iillimitable/safe/blob/main/safe-map/src/routes/incidents.js"
click node_feedback_routes "https://github.com/iillimitable/safe/blob/main/safe-map/src/routes/feedback.js"
click node_admin_routes "https://github.com/iillimitable/safe/blob/main/safe-map/src/routes/admin.js"
click node_auth_middleware "https://github.com/iillimitable/safe/blob/main/safe-map/src/middleware/auth.js"
click node_admin_middleware "https://github.com/iillimitable/safe/blob/main/safe-map/src/middleware/admin.js"
click node_scoring "https://github.com/iillimitable/safe/blob/main/safe-map/src/utils/scoring.js"
click node_user_model "https://github.com/iillimitable/safe/blob/main/safe-map/src/models/User.js"
click node_report_model "https://github.com/iillimitable/safe/blob/main/safe-map/src/models/Report.js"
click node_incident_model "https://github.com/iillimitable/safe/blob/main/safe-map/src/models/Incident.js"
click node_feedback_model "https://github.com/iillimitable/safe/blob/main/safe-map/src/models/Feedback.js"

classDef toneNeutral fill:#f8fafc,stroke:#334155,stroke-width:1.5px,color:#0f172a
classDef toneBlue fill:#dbeafe,stroke:#2563eb,stroke-width:1.5px,color:#172554
classDef toneAmber fill:#fef3c7,stroke:#d97706,stroke-width:1.5px,color:#78350f
classDef toneMint fill:#dcfce7,stroke:#16a34a,stroke-width:1.5px,color:#14532d
classDef toneRose fill:#ffe4e6,stroke:#e11d48,stroke-width:1.5px,color:#881337
classDef toneIndigo fill:#e0e7ff,stroke:#4f46e5,stroke-width:1.5px,color:#312e81
classDef toneTeal fill:#ccfbf1,stroke:#0f766e,stroke-width:1.5px,color:#134e4a
class node_web_app,node_auth_state,node_report_form,node_safety_dashboard,node_incident_map,node_incident_form,node_feedback_form,node_community_user toneBlue
class node_api_server,node_auth_routes,node_report_routes,node_incident_routes,node_feedback_routes,node_auth_middleware toneAmber
class node_scoring toneMint
class node_admin_panel,node_user_activity,node_incident_review,node_report_review,node_feedback_review,node_admin_routes,node_admin_middleware toneRose
class node_user_model,node_report_model,node_incident_model,node_feedback_model,node_mongodb,node_admin_user toneIndigo
