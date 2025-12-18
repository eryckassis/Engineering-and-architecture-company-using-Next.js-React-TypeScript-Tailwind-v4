import type { NavLink, ContactInfo } from "@/types";

export const mainNavLinks: NavLink[] = [
  { label: "Index", href: "/" },
  { label: "Studio", href: "/studio" },
  { label: "Our Spaces", href: "/spaces" },
  { label: "One Installation", href: "/sample-space" },
  { label: "BluePrints", href: "/blueprints" },
  { label: "Connect", href: "/connect" },
];

export const footerNavLinks: NavLink[] = [
  { label: "Index", href: "/" },
  { label: "Studio", href: "/studio" },
  { label: "Our Spaces", href: "/spaces" },
  { label: "One Installation", href: "/sample-space" },
  { label: "Blueprints", href: "/blueprints" },
  { label: "Connect", href: "/connect" },
];

export const socialLinks: NavLink[] = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Are.na", href: "https://are.na" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

export const ContactInfo: ContactInfo[] = [
  {
    type: "email",
    label: "General",
    value: "desk@terrene.studio",
    href: "mailto:desk@terrene.studio",
  },
  {
    type: "email",
    label: "New Comissions",
    value: "build@terrene.studio",
    href: "mailto:build@terrene.studio",
  },
  {
    type: "phone",
    label: "Phone",
    value: "+1 (872) 441-2087",
    href: "tel:+18724412086",
  },
  {
    type: "address",
    label: "Studio Address",
    value: "18 Cordova Lane, Seattle, WA 98101",
  },
];
