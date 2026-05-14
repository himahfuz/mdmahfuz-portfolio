import { Metadata } from 'next';
import Mushak66Client from './Mushak66Client';

export const metadata: Metadata = {
  title: 'Mushak 6.6 Online Form - NBR standard VDS Certificate',
  description: 'Generate NBR standard Mushak 6.6 (Certificate of Tax Deduction at Source) in one click. Free online VDS certificate generator with auto-calculation for Bangladesh.',
  keywords: [
    'Mushak 6.6', 
    'VAT deduction certificate Bangladesh', 
    'VDS certificate BD', 
    'NBR Form 6.6 format', 
    'Mushak 6.6 excel', 
    'Mushak 6.6 pdf generator', 
    'Online Mushak 6.6'
  ],
};

export default function Page() {
  return <Mushak66Client />;
}
