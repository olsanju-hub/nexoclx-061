import {
  BookOpen,
  Calculator,
  FileText,
  FolderOpen,
  HeartPulse,
  Library,
  MoreHorizontal,
  Route,
  Stethoscope,
  Wrench,
} from 'lucide-react';
import { routes } from '../app/routes.js';

export const appConfig = {
  name: 'NexoClx 061',
  context: 'Emergencias extrahospitalarias y traslado critico',
  icon: `${import.meta.env.BASE_URL}icons/icon-192.png`,
  accent: '#a8323a',
  homeVariant: 'balanced-five',
};

export const primarySections = [
  {
    id: routes.protocols,
    title: 'Protocolos',
    description: 'Guías para asistencia extrahospitalaria.',
    icon: FileText,
  },
  {
    id: routes.circuits,
    title: 'Circuitos',
    description: 'Activación, prealerta y destino útil.',
    icon: Route,
  },
  {
    id: routes.procedures,
    title: 'Procedimientos',
    description: 'Actuaciones técnicas en escena y traslado.',
    icon: Stethoscope,
  },
  {
    id: routes.calculations,
    title: 'Cálculos',
    description: 'Selector operativo.',
    icon: Calculator,
  },
  {
    id: routes.sources,
    title: 'Fuentes',
    description: 'Guías y documentos consultados.',
    icon: BookOpen,
  },
];

export const secondarySections = [
  { id: routes.protocols, title: 'Protocolos', description: 'Guías para asistencia extrahospitalaria.', icon: FolderOpen },
  { id: routes.circuits, title: 'Circuitos', description: 'Activación, prealerta y destino útil.', icon: Route },
  { id: routes.procedures, title: 'Procedimientos', description: 'Actuaciones técnicas en escena y traslado.', icon: Stethoscope },
  { id: routes.calculations, title: 'Cálculos', description: 'Selector operativo.', icon: Calculator },
  { id: routes.sources, title: 'Fuentes', description: 'Guías y documentos consultados.', icon: Library },
];

export const bottomNavItems = [
  { id: routes.home, label: 'Inicio', icon: HeartPulse },
  { id: routes.protocols, label: 'Protocolos', icon: FileText },
  { id: routes.circuits, label: 'Circuitos', icon: Route },
  { id: routes.more, label: 'Más', icon: MoreHorizontal },
];

export const desktopNavItems = [
  { id: routes.protocols, label: 'Protocolos' },
  { id: routes.circuits, label: 'Circuitos' },
  { id: routes.procedures, label: 'Procedimientos' },
  { id: routes.calculations, label: 'Cálculos' },
  { id: routes.sources, label: 'Fuentes' },
];

export const sectionIcons = {
  [routes.procedures]: Stethoscope,
  [routes.circuits]: Route,
};
