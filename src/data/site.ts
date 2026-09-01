export const profile = {
  name: "Trịnh Trung Hiếu",
  title: "Golang Backend Engineer",
  tagline:
    "Golang Backend Engineer focused on reliable systems, databases, messaging, and cloud infrastructure.",
  domain: "hieutrinh02.dev",
  email: "contact@hieutrinh02.dev",
  emailHref: "mailto:contact@hieutrinh02.dev",
  github: "https://github.com/hieutrinh02",
  linkedin: "https://www.linkedin.com/in/hieutrinh02/",
  x: "https://x.com/hieutrinh02",
  discord: "hieutrinh02",
  telegram: "t.me/hieutrinh02",
  telegramHref: "https://t.me/hieutrinh02"
};

export const backendProjects = [
  {
    name: "go-order-service",
    description:
      "A production-inspired order and payment system with idempotent APIs, transactional outbox messaging, Kafka-based event processing, observability, and automated K3s deployment on AWS EC2.",
    tags: [
      "Go",
      "PostgreSQL",
      "Kafka",
      "Redis",
      "Kubernetes",
      "K3s",
      "Docker",
      "AWS EC2",
      "GitHub Actions",
      "Prometheus",
      "Grafana",
      "Outbox Pattern"
    ],
    links: [
      { label: "GitHub", href: "https://github.com/hieutrinh02/go-order-service" }
    ]
  },
  {
    name: "go-async-job-queue",
    description:
      "A PostgreSQL-backed asynchronous job queue for delayed execution, concurrent workers, retries, dead letter handling, and operational visibility.",
    tags: [
      "Go",
      "PostgreSQL",
      "sqlc",
      "goose",
      "pgx",
      "Worker Pool",
      "Retry",
      "Dead Letter Queue",
      "Prometheus",
      "Docker Compose"
    ],
    links: [
      { label: "GitHub", href: "https://github.com/hieutrinh02/go-async-job-queue" }
    ]
  }
];

export const securityArchive = [
  {
    name: "blockchain-engineer-portfolio",
    description:
      "A multi-chain project archive covering Starknet lending, Solana NFT marketplace and CPMM, Sui CLMM, Aptos CLOB, and a Hyperledger Fabric letter of credit system.",
    tags: [
      "Starknet",
      "Solana",
      "Sui",
      "Aptos",
      "Hyperledger Fabric",
      "DeFi",
      "NFT Marketplace",
      "CLOB",
      "CPMM"
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/hieutrinh02/blockchain-engineer-portfolio"
      }
    ]
  },
  {
    name: "smart-contract-security-portfolio",
    description:
      "A portfolio of competitive smart contract audit findings across Solidity/EVM contests, including ranks, reports and high, medium, and low severity issues.",
    tags: [
      "Smart Contract Security",
      "Solidity",
      "EVM",
      "Audit Contests",
      "Findings"
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/hieutrinh02/smart-contract-security-portfolio"
      }
    ]
  }
];
