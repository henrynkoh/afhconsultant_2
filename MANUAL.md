# AFH Compliance Architect - Complete Manual

## Table of Contents

1. [Introduction](#introduction)
2. [Platform Overview](#platform-overview)
3. [Module Guide](#module-guide)
4. [Question Bank System](#question-bank-system)
5. [Navigation & Features](#navigation--features)
6. [Best Practices](#best-practices)
7. [Technical Details](#technical-details)
8. [Troubleshooting](#troubleshooting)

## Introduction

The AFH Compliance Architect is a comprehensive training platform designed to transform prospective consultants into expert advisors for Adult Family Home (AFH) providers in Washington State. This manual provides complete documentation for using the platform effectively.

## Platform Overview

### Purpose
Train consultants, advisors, and concierges to guide AFH providers through:
- Physical plant compliance
- Emergency planning requirements
- Medication systems and documentation
- MAR (Medication Administration Record) management
- Nutrition and activities compliance

### Target Audience
- Prospective AFH consultants
- Current consultants seeking certification
- AFH administrators preparing for inspections
- Training organizations

## Module Guide

### Module 1: Setting Up Your Home
**WAC References**: 388-76-10525, 10585, 10584, 10885, 10890, 10320, 10325, 10355

**Key Topics**:
- Exterior & Entry compliance (ramps, handrails, doorways)
- Interior safety systems (fire safety, water temperature)
- Resident bedrooms & privacy requirements
- Kitchen, laundry, & sanitation standards
- Administrative records and binders

**Study Approach**:
1. Review each phase sequentially
2. Pay attention to specific measurements (e.g., 1:12 ramp ratio, 80/120 sq ft bedrooms)
3. Understand the "why" behind each requirement
4. Practice with the 50 preparation questions

### Module 2: Emergency Planning
**WAC References**: 388-76-10830 through 10855

**Key Topics**:
- Master disaster plan development
- 72-hour survival logistics (food, water, supplies)
- Medical readiness and first aid
- Evacuation drill procedures
- Documentation requirements

**Study Approach**:
1. Focus on the 5-minute evacuation standard
2. Master the 72-hour supply calculations
3. Understand drill frequency requirements
4. Learn the R.A.C.E. and P.A.S.S. protocols

### Module 3: Medication Systems & Documentation
**WAC References**: 388-76-10430 through 10490

**Key Topics**:
- System setup before resident admission
- Three tiers of assistance (Independent, Self-Admin with Assistance, Administration)
- Storage and safety protocols
- Refusal and disposal procedures
- Nurse delegation requirements

**Study Approach**:
1. Understand the difference between assistance and administration
2. Master the 30-day disposal rule
3. Learn label verification requirements
4. Study the hand-over-hand prohibition

### Module 4: MAR Documentation
**WAC References**: 388-76-10430 through 10490

**Key Topics**:
- Reading and decoding MARs
- Transcription from practitioner orders
- Filling out MARs correctly
- Error correction procedures
- Managing refusals and changes

**Study Approach**:
1. Learn the "immediate documentation" rule
2. Master error correction (no white-out, circle and explain)
3. Understand refusal documentation
4. Practice transcription accuracy

### Module 5: Nutrition & Activities
**WAC References**: 388-112A, 388-76-10415

**Key Topics**:
- Three-meal mandate and snack requirements
- Safe food handling and training
- Modified diets and physician approval
- Resident-centered meal planning
- Social and recreational activities

**Study Approach**:
1. Understand the 24-hour meal schedule
2. Learn food safety requirements
3. Master cultural accommodation requirements
4. Study activity planning and documentation

## Question Bank System

### Structure
Each module contains 50 preparation questions organized by category:
- Physical Plant & Safety
- Administration & Records
- Bedrooms & Bathrooms
- Survival Logistics
- Evacuation & Drills
- System Basics & Assistance
- Documentation & Errors
- Storage & Disposal
- Food Service & Nutrition
- Activities & Engagement

### Using Questions Effectively

1. **Initial Study**: Read questions and try to answer before revealing
2. **Review Mode**: Use category filters to focus on weak areas
3. **Practice Testing**: Hide answers and test your knowledge
4. **WAC Mastery**: Pay attention to WAC citations in each answer

### Answer Format
Each answer includes:
- Direct answer to the question
- WAC citation (when applicable)
- Logic-based explanation
- Best practice recommendations

## Navigation & Features

### Homepage
- Module cards with descriptions
- WAC reference information
- Quick access to all modules
- R.A.R. Method overview

### Module Pages
- **Phase Sections**: Expandable curriculum content
- **Quick Navigation**: Sidebar for easy phase access
- **Question Bank**: Filterable by category
- **Answer Reveals**: Click to show/hide answers

### Interactive Elements
- **Expandable Phases**: Click phase headers to expand/collapse
- **Category Filter**: Dropdown to filter questions
- **Answer Toggle**: Chevron icons to reveal answers
- **WAC Badges**: Color-coded WAC references

## Best Practices

### Study Schedule
- **Week 1-2**: Module 1 (Setting Up Your Home)
- **Week 3**: Module 2 (Emergency Planning)
- **Week 4**: Module 3 (Medication Systems)
- **Week 5**: Module 4 (MAR Documentation)
- **Week 6**: Module 5 (Nutrition & Activities)
- **Week 7**: Review all modules and practice questions

### Learning Strategy
1. **Read First**: Review curriculum phases before questions
2. **Practice Second**: Answer questions without looking at answers
3. **Review Third**: Study answers and understand the logic
4. **Repeat**: Cycle through questions multiple times

### Note-Taking
- Create a WAC reference sheet
- Document common mistakes
- Note measurement requirements
- Track areas needing more study

### Exam Preparation
- Review all 250 questions (50 per module)
- Focus on questions you got wrong
- Understand the "why" behind each answer
- Practice explaining answers to others

## Technical Details

### System Requirements
- Node.js 18 or higher
- npm or yarn package manager
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation
```bash
npm install
npm run dev
```

### Building for Production
```bash
npm run build
npm start
```

### Project Structure
```
AFHconsultant_2/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── modules/           # Module pages
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navigation.tsx
│   └── ModuleContent.tsx
├── data/                  # Curriculum data
│   └── modules.ts        # All modules and questions
└── public/               # Static assets
```

### Customization
To add or modify content:
1. Edit `data/modules.ts`
2. Follow the existing structure
3. Maintain WAC citations
4. Keep answers logic-based

## Troubleshooting

### Common Issues

**Problem**: Questions not displaying
- **Solution**: Check browser console for errors, ensure data/modules.ts is properly formatted

**Problem**: Navigation not working
- **Solution**: Clear browser cache, restart development server

**Problem**: Styles not loading
- **Solution**: Run `npm install` again, check Tailwind CSS configuration

**Problem**: Module page shows 404
- **Solution**: Verify module ID matches exactly (case-sensitive)

### Getting Help
- Review this manual first
- Check the README.md for technical issues
- Consult official DSHS documentation for WAC questions
- Review Next.js documentation for platform issues

## Conclusion

The AFH Compliance Architect platform provides comprehensive training for AFH consultants. By following this manual and dedicating time to study each module, you'll be well-prepared to guide providers through the complex world of AFH compliance.

Remember: Mastery comes from understanding the "why" behind each regulation, not just memorizing answers. Use the R.A.R. Method (Regulation, Assessment, Remedy) to think like a consultant.

---

**Good luck with your AFH consultant certification journey!**

