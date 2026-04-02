import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Privacy() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="flex-grow">
        <section className="py-20 sm:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
              Privacy Policy
            </h1>
            <div className="prose prose-lg text-gray-600 space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Protection</h2>
                <p>
                  edu.cloud is committed to protecting the privacy and security of all alumni data submitted by higher education institutions. We implement industry-leading security measures including encryption, secure data storage, and strict access controls.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Data</h2>
                <p>
                  Alumni names and information provided are used exclusively for research purposes to identify professional achievements, career milestones, and impact metrics. Data is aggregated at the institutional level and never shared with third parties without explicit consent.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Compliance</h2>
                <p>
                  We comply with all applicable data protection regulations including FERPA, GDPR, and other relevant privacy laws. Our practices are regularly audited to ensure the highest standards of data security and privacy protection.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
                <p>
                  For questions about our privacy practices, please contact us at privacy@edu.cloud
                </p>
              </section>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
"
    },
    {
      "file": "src/app/terms/page.tsx",
      "data": "import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Terms() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="flex-grow">
        <section className="py-20 sm:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
              Terms of Service
            </h1>
            <div className="prose prose-lg text-gray-600 space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Overview</h2>
                <p>
                  edu.cloud provides research services to higher education institutions. Our platform enables institutions to submit alumni data and receive comprehensive reports on the professional achievements and impact of their graduates.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptable Use</h2>
                <p>
                  Institutions agree to use edu.cloud services only for legitimate educational and research purposes. Users must have appropriate authorization to submit alumni data and must comply with all applicable privacy laws and institutional policies.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Ownership</h2>
                <p>
                  While institutions retain ownership of their submitted data, they grant edu.cloud a limited license to conduct research and analysis. All aggregated findings remain the property of the submitting institution.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                <p>
                  edu.cloud provides research services "as is" without warranties. We are not liable for incomplete findings or inaccuracies that may result from publicly available information limitations or individual privacy choices.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
                <p>
                  For questions about our terms, please contact us at legal@edu.cloud
                </p>
              </section>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
"
    },
    {
      "file": "next.config.ts",
      "data": "import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
"
    },
    {
      "file": "tsconfig.json",
      "data": "{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
"
    },
    {
      "file": "tsconfig.node.json",
      "data": "{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
"
    },
    {
      "file": "package.json",
      "data": "{
  "name": "edu-cloud",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "next": "^15.1.0"
  },
  "devDependencies": {
    "typescript": "^5.6.0",
    "@types/node": "^20.14.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.40",
    "tailwindcss": "^3.4.3",
    "@next/eslint-config-next": "^15.1.0",
    "eslint": "^8.56.0"
  }
}
