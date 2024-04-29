"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[2083],{3147:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var t=s(5893),r=s(1151);const a={sidebar_position:5,sidebar_label:"Superset on EKS"},i="Superset on EKS",o={id:"blueprints/data-analytics/superset-on-eks",title:"Superset on EKS",description:"Introduction",source:"@site/docs/blueprints/data-analytics/superset-on-eks.md",sourceDirName:"blueprints/data-analytics",slug:"/blueprints/data-analytics/superset-on-eks",permalink:"/data-on-eks/docs/blueprints/data-analytics/superset-on-eks",draft:!1,unlisted:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/blueprints/data-analytics/superset-on-eks.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Superset on EKS"},sidebar:"blueprints",previous:{title:"DataHub on EKS",permalink:"/data-on-eks/docs/blueprints/data-analytics/datahub-on-eks"},next:{title:"AI/ML on EKS",permalink:"/data-on-eks/docs/category/aiml-on-eks"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Superset on AWS",id:"superset-on-aws",level:2},{value:"Deploying the Solution",id:"deploying-the-solution",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Deploy",id:"deploy",level:3},{value:"Verify Deployment",id:"verify-deployment",level:3},{value:"Cleanup",id:"cleanup",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"superset-on-eks",children:"Superset on EKS"}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://superset.apache.org/",children:"Apache Superset"})," is a popular open source data exploration and visualization platform. Superset provides a rich set of data visualizations and easy ad-hoc query and analysis functionalities for data scientists, analysts, and business users."]}),"\n",(0,t.jsxs)(n.p,{children:["This ",(0,t.jsx)(n.a,{href:"https://github.com/awslabs/data-on-eks/tree/main/analytics/terraform/superset-on-eks",children:"blueprint"})," deploys Superset on an EKS cluster using Postgres as the backend database and Amazon Elastic Block Store (Amazon EBS) for persistent storage."]}),"\n",(0,t.jsx)(n.h2,{id:"superset-on-aws",children:"Superset on AWS"}),"\n",(0,t.jsx)(n.p,{children:"On AWS, Superset can run on an EKS cluster. By using EKS, you can leverage Kubernetes for deployment, scaling, and management of Superset services. Other AWS services like VPC, IAM, and EBS provide the networking, security, and storage capabilities."}),"\n",(0,t.jsx)(n.p,{children:"Key AWS services used:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Amazon EKS as the managed Kubernetes cluster to run Superset pods and services."}),"\n",(0,t.jsx)(n.li,{children:"Amazon EBS to provide a scalable block store for Superset persistent storage."}),"\n",(0,t.jsx)(n.li,{children:"Amazon ECR to store Docker container images for Superset and dependencies"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"deploying-the-solution",children:"Deploying the Solution"}),"\n",(0,t.jsx)(n.p,{children:"The blueprint performs the following to deploy Superset on EKS:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Create a new VPC with public and private subnets"}),"\n",(0,t.jsx)(n.li,{children:"Provision an EKS cluster control plane and managed worker nodes"}),"\n",(0,t.jsx)(n.li,{children:"Create an Amazon EBS file system and access point"}),"\n",(0,t.jsx)(n.li,{children:"Build Docker images and push to Amazon ECR"}),"\n",(0,t.jsx)(n.li,{children:"Install Superset and services on EKS via Helm chart"}),"\n",(0,t.jsx)(n.li,{children:"Expose Superset UI through a load balancer"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Ingress is enabled and AWS LoadBalancer Controller will provision an ALB to expose the Superset frontend UI."}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["You may customize the blueprint by changing values in ",(0,t.jsx)(n.code,{children:"variables.tf"}),", to deploy to a different region (default to ",(0,t.jsx)(n.code,{children:"us-west-1"})," ), use different cluster name, number of subnets / AZs, or disable addons like fluentbit"]})}),"\n",(0,t.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"Ensure that you have installed the following tools on your machine."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html",children:"aws cli"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://Kubernetes.io/docs/tasks/tools/",children:"kubectl"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://learn.hashicorp.com/tutorials/terraform/install-cli",children:"terraform"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://helm.sh",children:"Helm"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"deploy",children:"Deploy"}),"\n",(0,t.jsx)(n.p,{children:"Clone the repository"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/awslabs/data-on-eks.git\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Navigate into one of the example directories and run ",(0,t.jsx)(n.code,{children:"install.sh"})," script"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd data-on-eks/analytics/terraform/superset-on-eks\nchmod +x install.sh\n./install.sh\n"})}),"\n",(0,t.jsx)(n.p,{children:"or simply"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"terraform init\nterraform apply --auto-approve\n"})}),"\n",(0,t.jsx)(n.h3,{id:"verify-deployment",children:"Verify Deployment"}),"\n",(0,t.jsx)(n.p,{children:"After the deployment completes, we can access the Superset UI .  For demo purpose, this blueprint creates the Ingress object for the Superset FrontEnd UI with public LoadBalancer."}),"\n",(0,t.jsx)(n.p,{children:"You may find the URL to the Superset frontend from the output superset_url, or by running kubectl command below:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"kubectl get ingress  -n superset\n\n# OUTPUT should looks like below\nNAME                CLASS     HOSTS   ADDRESS                                                                   PORTS   AGE\nsuperset-ingress   aws-alb   *       k8s-superset-***.***.elb.amazonaws.com                                     80      125m\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Copy the ADDRESS field from the output, then open browser and enter the URL as ",(0,t.jsx)(n.code,{children:"http://<address>/"}),". Enter ",(0,t.jsx)(n.code,{children:"admin"})," as both user name and password when prompted.  We can view the Superset UI like below."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"img.png",src:s(9239).Z+"",width:"1596",height:"513"}),"\n",(0,t.jsx)(n.img,{alt:"img.png",src:s(9726).Z+"",width:"1859",height:"883"})]}),"\n",(0,t.jsx)(n.h2,{id:"cleanup",children:"Cleanup"}),"\n",(0,t.jsxs)(n.p,{children:["To clean up your environment, run the ",(0,t.jsx)(n.code,{children:"cleanup.sh"})," script."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"chmod +x cleanup.sh\n./cleanup.sh\n"})}),"\n",(0,t.jsx)(n.p,{children:"otherwise"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"terraform destroy --auto-approve\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},9239:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/superset1-81f9bde35276188485614002f304a00e.png"},9726:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/superset2-7c54287b848375ef93d3a5473774e1ee.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>i});var t=s(7294);const r={},a=t.createContext(r);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);