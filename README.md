# AFH Compliance Architect - Consultant Training Platform

A comprehensive Next.js curriculum platform designed to train consultants, advisors, and concierges on Adult Family Home (AFH) business compliance in Washington State.

## Overview

This project provides a complete "cookbook" style curriculum covering:

1. **Setting Up Your Home** - Physical plant requirements, safety systems, and administrative records
2. **Emergency Planning** - Disaster preparedness, evacuation procedures, and 72-hour survival logistics
3. **Medication Systems & Documentation** - Medication management, storage, administration, and disposal protocols
4. **MAR Documentation** - How to read and fill out Medication Administration Records
5. **Nutrition & Activities** - Food services, meal planning, and recreational activity requirements

## Features

- **Comprehensive Curriculum**: Detailed phases for each module with WAC citations
- **Top 100 Questions**: Logic-based preparation questions for each topic area
- **Interactive Learning**: Expandable sections, answer reveals, and category filtering
- **Modern UI**: Beautiful, responsive design with Tailwind CSS
- **WAC Compliance**: All content based on Washington Administrative Code regulations

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Homepage with module overview
│   ├── modules/
│   │   └── [moduleId]/
│   │       └── page.tsx     # Dynamic module pages
│   └── globals.css          # Global styles
├── components/
│   ├── Navigation.tsx      # Main navigation component
│   └── ModuleContent.tsx   # Module content display component
├── data/
│   └── modules.ts          # All curriculum data and questions
└── public/                 # Static assets
```

## Curriculum Modules

### 1. Setting Up Your Home
- Exterior & Entry compliance
- Interior safety systems
- Resident bedrooms & privacy
- Kitchen, laundry, & sanitation
- Administrative records

### 2. Emergency Planning
- Master disaster plan
- 72-hour survival logistics
- Medical readiness
- Drill mastery

### 3. Medication Systems
- System setup requirements
- Assessment & NCP integration
- Storage & safety protocols
- Refusals & disposal

### 4. MAR Documentation
- Reading and understanding MARs
- Transcription best practices
- Filling out MARs correctly
- Managing refusals & changes

### 5. Nutrition & Activities
- Nutritional foundation
- Resident-centered dining
- Social and recreational activities

## WAC References

All content is based on Washington Administrative Code:
- WAC 388-76-10320 through 10355 (Administrative Records)
- WAC 388-76-10415, 10420 (Nutrition)
- WAC 388-76-10430 through 10490 (Medication Systems)
- WAC 388-76-10525, 10585, 10584 (Postings & Records)
- WAC 388-76-10700 through 10825 (Physical Plant)
- WAC 388-76-10830 through 10855 (Emergency Planning)
- WAC 388-112A (Activities)

## License

This project is designed for educational purposes to train AFH consultants and advisors.

## Documentation

Complete documentation is available:

- **[Quick Start Guide](./QUICKSTART.md)** - Get started in 5 minutes
- **[Complete Manual](./MANUAL.md)** - Detailed user manual
- **[Step-by-Step Tutorial](./TUTORIAL.md)** - Guided learning walkthrough
- **[Documentation Index](./DOCUMENTATION_INDEX.md)** - Complete file listing

## Marketing Materials

All marketing materials are available in the `/marketing/` directory:

- **Facebook Ads** - Campaign templates and strategies
- **Instagram Ads** - Post templates and engagement strategies
- **Threads Ads** - Organic engagement content
- **Blogger Post** - Complete blog post content
- **Naver Blog** - Korean blog post (한국어)
- **Tistory Blog** - Korean blog post (한국어)
- **WordPress Post** - WordPress-ready content
- **Newsletter** - Email newsletter templates
- **Email Campaigns** - Complete email marketing campaigns

See [Documentation Index](./DOCUMENTATION_INDEX.md) for complete listing.

## Support

For questions about the curriculum content or WAC compliance, consult the official DSHS documentation and training materials.

For platform usage, refer to the [Manual](./MANUAL.md) or [Tutorial](./TUTORIAL.md).

