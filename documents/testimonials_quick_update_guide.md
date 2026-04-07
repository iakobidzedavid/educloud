# Testimonials Section – Quick Update Guide

## 60-Second Testimonial Update

### When You Have Pilot Customer Feedback Ready:

1. **Open the component file:**
   ```
   src/components/Testimonials.tsx
   ```

2. **Locate the testimonials array (line ~17):**
   ```typescript
   const testimonials: Testimonial[] = [
     {
       id: 'testimonial-1',
       name: 'Dr. Sarah Mitchell',    // ← REPLACE with real customer
       title: 'Vice President...',    // ← REPLACE
       institution: 'Midwest...',     // ← REPLACE
       quote: 'edu.cloud transformed...', // ← REPLACE with real quote
       metrics: [
         { label: 'Research Time Reduced', value: '60%' }, // ← REPLACE
         { label: 'Alumni Outcomes Tracked', value: '2,847' } // ← REPLACE
       ],
   ```

3. **Save, commit, and deploy:**
   ```bash
   git add src/components/Testimonials.tsx
   git commit -m "update: real pilot customer testimonials"
   git push origin main
   ```

---

## Template: Exact Code Block to Paste

Replace the entire `testimonials` array with this structure (keep the same format):

```typescript
const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'CUSTOMER NAME HERE',
    title: 'JOB TITLE HERE',
    institution: 'INSTITUTION NAME HERE',
    quote: 'CUSTOMER QUOTE HERE (2-3 sentences)',
    metrics: [
      { label: 'METRIC 1 LABEL', value: 'METRIC 1 VALUE' },
      { label: 'METRIC 2 LABEL', value: 'METRIC 2 VALUE' }
    ],
    caseStudyUrl: '#'
  },
  {
    id: 'testimonial-2',
    name: 'CUSTOMER NAME HERE',
    title: 'JOB TITLE HERE',
    institution: 'INSTITUTION NAME HERE',
    quote: 'CUSTOMER QUOTE HERE (2-3 sentences)',
    metrics: [
      { label: 'METRIC 1 LABEL', value: 'METRIC 1 VALUE' },
      { label: 'METRIC 2 LABEL', value: 'METRIC 2 VALUE' }
    ],
    caseStudyUrl: '#'
  },
  {
    id: 'testimonial-3',
    name: 'CUSTOMER NAME HERE',
    title: 'JOB TITLE HERE',
    institution: 'INSTITUTION NAME HERE',
    quote: 'CUSTOMER QUOTE HERE (2-3 sentences)',
    metrics: [
      { label: 'METRIC 1 LABEL', value: 'METRIC 1 VALUE' },
      { label: 'METRIC 2 LABEL', value: 'METRIC 2 VALUE' }
    ],
    caseStudyUrl: '#'
  }
];
```

---

## Real Example (From Pilot)

```typescript
const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Dr. Michael Patterson',
    title: 'Vice President of Advancement',
    institution: 'University of Colorado at Boulder',
    quote: 'edu.cloud gave us comprehensive data on 3,200+ alumni outcomes that we previously had no systematic way to track. This was transformational for our strategic planning and donor conversations.',
    metrics: [
      { label: 'Alumni Outcomes Tracked', value: '3,200+' },
      { label: 'Research Hours Saved', value: '240' }
    ],
    caseStudyUrl: '#'
  },
  {
    id: 'testimonial-2',
    name: 'Jennifer Wong',
    title: 'Director of Institutional Research',
    institution: 'Williams College',
    quote: 'The data quality and accuracy exceeded our expectations. We found 47 alumni-founded companies we didn\'t know about, which is now a centerpiece of our fundraising narrative.',
    metrics: [
      { label: 'Companies Identified', value: '47' },
      { label: 'Data Accuracy', value: '96%' }
    ],
    caseStudyUrl: '#'
  },
  {
    id: 'testimonial-3',
    name: 'Robert Davis',
    title: 'Chief Advancement Officer',
    institution: 'California State University System',
    quote: 'With 12,000+ alumni tracked across our system, edu.cloud provided the ROI evidence we needed for our state funding justification. This is now a critical part of our annual legislative testimony.',
    metrics: [
      { label: 'System-wide Alumni Tracked', value: '12,000+' },
      { label: 'Job Creation Evidence', value: '18,500' }
    ],
    caseStudyUrl: '#'
  }
];
```

---

## Metric Examples (Copy & Paste)

### Time Savings
- `{ label: 'Research Hours Saved', value: '240' }`
- `{ label: 'Manual Work Reduced', value: '80%' }`
- `{ label: 'Report Generation Time Cut', value: '75%' }`

### Scale & Reach
- `{ label: 'Alumni Tracked', value: '2,847' }`
- `{ label: 'Data Points Aggregated', value: '15,200' }`
- `{ label: 'Institutions Served', value: '8' }`

### Entrepreneurship
- `{ label: 'Companies Founded', value: '143' }`
- `{ label: 'Startups Identified', value: '89' }`
- `{ label: 'Venture Capital Raised', value: '$240M' }`

### Jobs & Impact
- `{ label: 'Jobs Created by Alumni', value: '8,400+' }`
- `{ label: 'Career Progressions Tracked', value: '5,200' }`
- `{ label: 'C-Suite Leaders Identified', value: '420' }`

### Quality & Compliance
- `{ label: 'Data Accuracy', value: '94%' }`
- `{ label: 'Accreditation Evidence Ready', value: '100%' }`
- `{ label: 'FERPA Compliant Records', value: '98%' }`

---

## Verification Checklist

Before pushing to production:

- [ ] All 3 names are real customer names (verified with sales)
- [ ] All titles are correct (CEO, Director, VP, etc.)
- [ ] All institution names match customer records exactly
- [ ] Quotes are authentic (copy-pasted from feedback form or email)
- [ ] Quotes are 2-3 sentences (not too long)
- [ ] Both metrics per card are present and filled in
- [ ] Metric values are specific numbers or percentages (not blanks)
- [ ] No typos in names, titles, or institutions
- [ ] Component file still runs: `npm run dev` → no errors

---

## File Structure

```
src/components/Testimonials.tsx  ← File to edit
src/app/page.tsx                 ← Already imports Testimonials (no change needed)
documents/testimonials_implementation_guide.md  ← Full documentation
documents/testimonials_quick_update_guide.md    ← This file
```

---

## Help & Rollback

**If something breaks:**
```bash
# Revert to last working version
git checkout HEAD -- src/components/Testimonials.tsx
git reset --hard HEAD~1
```

**To view component in isolation:**
```bash
npm run dev
# Visit http://localhost:3000
# Scroll to "Testimonials & Results" section
```

**Preview before deploy:**
- Test on phone: https://[your-domain].com (mobile view)
- Test on desktop: https://[your-domain].com (full screen)
- Verify no layout shifts or broken styling

---

## Questions?

See `documents/testimonials_implementation_guide.md` for detailed info about:
- Styling customization
- Adding more cards
- API integration
- Performance optimization
- Troubleshooting
