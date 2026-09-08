export interface Course {
  slug: string;
  code: string; // short badge, e.g. "A+"
  title: string; // e.g. "A+ — Hardware & IT Fundamentals"
  focus: string;
  shortDescription: string;
  overview: string[];
  level: "Foundation" | "Intermediate" | "Advanced";
  duration: string; // "To be confirmed" until the institute verifies
  learningMode: string;
  practicalFocus: string;
  whoIsFor: string[];
  keyLearning: string[]; // verify against official syllabus before publishing
  practice: string[]; // "What will you practice?" (lab section)
  benefits: string[]; // "Why learn this course?"
  skills: string[];
  outcome: { description: string; careerAreas: string[] };
  credentials: string; // never fabricate — placeholder until Esho EduTech confirms
  relatedCourses: string[];
}

export const CREDENTIALS_PLACEHOLDER =
  "Certification information: to be confirmed by Esho EduTech.";

export const courses: Course[] = [
  {
    slug: "a-plus",
    code: "A+",
    title: "A+ — Hardware & IT Fundamentals",
    focus: "Hardware & IT fundamentals",
    shortDescription:
      "Build a strong foundation in computer hardware, operating systems, troubleshooting and essential IT support concepts through classroom learning and practical exposure.",
    overview: [
      "The A+ course builds a strong foundation in computer hardware, operating systems and everyday troubleshooting. It is designed for students and freshers beginning their IT journey — no prior technical background required.",
      "Learning happens in the classroom with a strong practical component: you will assemble, configure and repair systems so the theory actually sticks.",
    ],
    level: "Foundation",
    duration: "To be confirmed",
    learningMode: "Classroom",
    practicalFocus: "Lab-focused",
    whoIsFor: [
      "Beginners starting an IT career",
      "Students who want to understand how computers work",
      "Anyone preparing for entry-level IT support responsibilities",
      "Learners planning to continue into Networking or System Administration",
    ],
    keyLearning: [
      "Computer hardware fundamentals",
      "Components and peripherals",
      "PC assembly and upgrades",
      "Operating systems basics",
      "Installation and configuration",
      "Troubleshooting fundamentals",
      "Hardware maintenance",
      "Basic IT support concepts",
    ],
    practice: [
      "PC component identification",
      "Hardware installation",
      "System assembly",
      "Operating system installation",
      "Troubleshooting scenarios",
      "Hardware maintenance routines",
    ],
    benefits: [
      "Build a foundation in IT hardware",
      "Understand how computers work",
      "Develop structured troubleshooting skills",
      "Learn operating-system fundamentals",
      "Prepare for entry-level IT support responsibilities",
      "Build a foundation for Networking and System Administration",
    ],
    skills: ["Hardware", "Troubleshooting", "Operating Systems", "IT Support Basics"],
    outcome: {
      description:
        "After completing the training, students should have a stronger understanding of computer hardware, operating systems and basic troubleshooting, providing a foundation for further study in networking and system administration.",
      careerAreas: ["IT Support", "Desktop Support", "Hardware Support", "Technical Support"],
    },
    credentials: CREDENTIALS_PLACEHOLDER,
    relatedCourses: ["n-plus", "linux", "mcse"],
  },
  {
    slug: "n-plus",
    code: "N+",
    title: "N+ — Networking Fundamentals",
    focus: "Networking fundamentals",
    shortDescription:
      "Understand how computers and devices connect, communicate and share information — with practical network configuration and troubleshooting exercises.",
    overview: [
      "The N+ course explains how networks actually work: addressing, devices, topologies, connectivity and structured troubleshooting — the concepts every IT environment depends on.",
      "Classroom sessions are paired with practical lab exercises: configuring addressing, testing connectivity and diagnosing problems, not just diagrams on slides.",
    ],
    level: "Foundation",
    duration: "To be confirmed",
    learningMode: "Classroom",
    practicalFocus: "Lab-focused",
    whoIsFor: [
      "Learners who understand computers and want to understand networks",
      "Students aiming for a networking path (CCNA onwards)",
      "IT support trainees who need reliable troubleshooting fundamentals",
    ],
    keyLearning: [
      "How networks and devices communicate",
      "Network models and topologies",
      "IP addressing and subnetting",
      "Switches, routers and wireless basics",
      "Connectivity testing",
      "Network troubleshooting methods",
    ],
    practice: [
      "Network configuration",
      "IP addressing exercises",
      "Connectivity testing",
      "Network troubleshooting",
      "Device configuration",
    ],
    benefits: [
      "Understand how systems connect and communicate",
      "Build a conceptual foundation for Cisco training (CCNA)",
      "Develop confident network troubleshooting habits",
      "Support hardware knowledge with connectivity skills",
    ],
    skills: ["Networking", "IP Addressing", "Connectivity", "Troubleshooting"],
    outcome: {
      description:
        "Students finish with a clear understanding of how networks are designed, connected and diagnosed — the direct foundation for Cisco-focused training and system administration.",
      careerAreas: ["IT Support", "Network Support", "Network Administration (entry pathway)"],
    },
    credentials: CREDENTIALS_PLACEHOLDER,
    relatedCourses: ["a-plus", "ccna", "mcse"],
  },
  {
    slug: "mcse",
    code: "MCSE",
    title: "Microsoft — System Administration",
    focus: "Microsoft / System Administration",
    shortDescription:
      "Learn to install, configure and manage Windows Server environments: users, policies, services and infrastructure that companies run on.",
    overview: [
      "This course covers the skills of a modern system administrator: setting up Windows Server, managing Active Directory, users, group policies and core network services.",
      "With a solid A+ and N+ background, you will learn to think like an administrator — building, maintaining and troubleshooting the systems businesses rely on daily.",
    ],
    level: "Intermediate",
    duration: "To be confirmed",
    learningMode: "Classroom",
    practicalFocus: "Lab-focused",
    whoIsFor: [
      "A+/N+ learners ready for system administration",
      "IT support staff upgrading into server administration",
      "Students targeting a Microsoft-systems career path",
    ],
    keyLearning: [
      "Windows Server installation and configuration",
      "Active Directory Domain Services",
      "Users, groups and Group Policy",
      "DHCP, DNS and file services",
      "Virtualization fundamentals",
      "Server troubleshooting and maintenance",
    ],
    practice: [
      "Windows Server installation",
      "Domain and Active Directory setup",
      "User and group management",
      "Group Policy configuration",
      "DHCP/DNS service configuration",
    ],
    benefits: [
      "Learn how enterprise systems are administered",
      "Manage users, access and policies with confidence",
      "Understand core server roles and services",
      "Build a pathway toward system administration roles",
    ],
    skills: ["Windows Server", "Active Directory", "User Management", "System Administration"],
    outcome: {
      description:
        "Completion builds practical understanding of administering Windows-based infrastructure, preparing students for further development in system administration and IT infrastructure work.",
      careerAreas: ["System Administration", "Windows Server Support", "IT Infrastructure"],
    },
    credentials: CREDENTIALS_PLACEHOLDER,
    relatedCourses: ["ccna", "linux", "n-plus"],
  },
  {
    slug: "ccna",
    code: "CCNA",
    title: "CCNA — Cisco Networking",
    focus: "Cisco Networking",
    shortDescription:
      "Move from networking concepts to real Cisco configuration: routers, switches, VLANs, routing and hands-on troubleshooting.",
    overview: [
      "CCNA training turns networking theory into device-level competence. You will work with Cisco-style routers and switches, practicing real configuration step by step.",
      "It follows naturally after networking fundamentals: N+ builds the concepts, CCNA builds the working skill of configuring and maintaining networks.",
    ],
    level: "Intermediate",
    duration: "To be confirmed",
    learningMode: "Classroom",
    practicalFocus: "Lab-focused",
    whoIsFor: [
      "Students who completed networking fundamentals",
      "Learners targeting a networking career",
      "Support engineers who want device-level skills",
    ],
    keyLearning: [
      "Cisco device fundamentals",
      "Switch configuration and VLANs",
      "IP routing fundamentals",
      "Network services and NAT",
      "ACLs and network security basics",
      "Structured network troubleshooting",
    ],
    practice: [
      "Router configuration",
      "Switch configuration",
      "VLAN setup",
      "Routing practice",
      "Network troubleshooting",
    ],
    benefits: [
      "Apply networking concepts on real devices",
      "Configure routers and switches with confidence",
      "Understand enterprise-style network design",
      "Build toward advanced networking (CCNP)",
    ],
    skills: ["Cisco Devices", "Routing & Switching", "VLANs", "Network Design"],
    outcome: {
      description:
        "Students finish able to configure and troubleshoot small-to-medium networks — a strong base for advanced networking programs and network administration pathways.",
      careerAreas: ["Networking", "Network Administration", "NOC / Support (entry pathway)"],
    },
    credentials: CREDENTIALS_PLACEHOLDER,
    relatedCourses: ["n-plus", "ccnp", "mcse"],
  },
  {
    slug: "ccnp",
    code: "CCNP",
    title: "CCNP — Advanced Networking",
    focus: "Advanced Cisco Networking",
    shortDescription:
      "Go deeper into enterprise routing, switching, security and large-network troubleshooting for advanced networking careers.",
    overview: [
      "CCNP-level training grows CCNA skill into enterprise competence: advanced routing protocols, redundancy, VPN concepts and complex troubleshooting methods.",
      "This course suits learners who already work with networks and want to handle bigger, more demanding environments.",
    ],
    level: "Advanced",
    duration: "To be confirmed",
    learningMode: "Classroom",
    practicalFocus: "Lab-focused",
    whoIsFor: [
      "CCNA learners ready to advance",
      "Working network administrators",
      "Students targeting serious network engineering roles",
    ],
    keyLearning: [
      "Advanced routing concepts (OSPF / BGP)",
      "Enterprise switching and redundancy",
      "VPN and remote-access concepts",
      "Infrastructure security",
      "Complex troubleshooting techniques",
      "Enterprise network design fundamentals",
    ],
    practice: [
      "Advanced router configurations",
      "Multi-area topology lab work",
      "Redundancy and failover exercises",
      "Enterprise troubleshooting scenarios",
    ],
    benefits: [
      "Handle enterprise-grade network scenarios",
      "Develop advanced troubleshooting methodology",
      "Understand design decisions, not just commands",
      "Build a strong advanced-networking profile",
    ],
    skills: ["Advanced Routing", "Enterprise Networking", "Infrastructure Security", "Diagnostics"],
    outcome: {
      description:
        "Students develop the ability to manage and troubleshoot larger networks, building a pathway toward advanced networking and infrastructure roles.",
      careerAreas: ["Advanced Networking", "Network Administration", "Infrastructure Support"],
    },
    credentials: CREDENTIALS_PLACEHOLDER,
    relatedCourses: ["ccna", "linux", "mcse"],
  },
  {
    slug: "linux",
    code: "Linux",
    title: "Linux — Red Hat Administration",
    focus: "Linux / System Administration",
    shortDescription:
      "Learn Linux from the command line up: installation, users, permissions, services and everyday administration tasks.",
    overview: [
      "This course teaches Linux the way it is used professionally: command-line first, service-oriented, and file-permission disciplined — aligned to common Red Hat administration practices.",
      "Expect daily hands-on practice: installing, configuring, managing users and services until the shell feels like home.",
    ],
    level: "Intermediate",
    duration: "To be confirmed",
    learningMode: "Classroom",
    practicalFocus: "Lab-focused",
    whoIsFor: [
      "Windows-comfortable learners who want Linux skills",
      "Support/administrative students exploring server platforms",
      "Anyone targeting Linux or cloud-oriented paths",
    ],
    keyLearning: [
      "Linux installation",
      "Command-line usage and navigation",
      "User and group management",
      "File permissions and ownership",
      "Package and service management",
      "System administration tasks",
      "Network configuration",
      "Shell scripting basics",
    ],
    practice: [
      "Linux installation",
      "Command-line usage",
      "User management",
      "File permission exercises",
      "System administration tasks",
      "Network configuration",
    ],
    benefits: [
      "Gain practical command-line confidence",
      "Manage users, services and servers reliably",
      "Understand security-oriented administration",
      "Open a parallel pathway to Windows administration",
    ],
    skills: ["Linux", "Command Line", "Services", "System Administration"],
    outcome: {
      description:
        "Completion builds a working ability to administer Linux systems — a valuable skill for support, infrastructure and server-administration pathways.",
      careerAreas: ["Linux Support", "System Administration", "Server Support"],
    },
    credentials: CREDENTIALS_PLACEHOLDER,
    relatedCourses: ["n-plus", "mcse", "a-plus"],
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}