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
  icon: '/icons/icon-192.png',
  accent: '#a8323a',
};

export const primarySections = [
  {
    id: routes.protocols,
    title: 'Protocolos',
    description: 'Escena, soporte y traslado.',
    icon: FileText,
  },
  {
    id: routes.circuits,
    title: 'Circuitos',
    description: 'Activacion y coordinacion.',
    icon: Route,
  },
  {
    id: routes.procedures,
    title: 'Procedimientos',
    description: 'Soporte pendiente.',
    icon: Stethoscope,
  },
  {
    id: routes.calculations,
    title: 'Calculos',
    description: 'Sin formulas activas.',
    icon: Calculator,
  },
  {
    id: routes.sources,
    title: 'Fuentes',
    description: 'Fuentes pendientes.',
    icon: BookOpen,
  },
];

export const secondarySections = [
  { id: routes.protocols, title: 'Protocolos', description: 'Listado estructural no operativo.', icon: FolderOpen },
  { id: routes.circuits, title: 'Circuitos', description: 'Sin circuitos operativos.', icon: Route },
  { id: routes.procedures, title: 'Procedimientos', description: 'Sin pasos clinicos activos.', icon: Stethoscope },
  { id: routes.calculations, title: 'Calculos', description: 'Sin formulas clinicas activas.', icon: Calculator },
  { id: routes.sources, title: 'Fuentes', description: 'Pendiente de fuentes.', icon: Library },
];

export const bottomNavItems = [
  { id: routes.home, label: 'Inicio', icon: HeartPulse },
  { id: routes.protocols, label: 'Protocolos', icon: FileText },
  { id: routes.circuits, label: 'Circuitos', icon: Route },
  { id: routes.more, label: 'Mas', icon: MoreHorizontal },
];

export const desktopNavItems = [
  { id: routes.protocols, label: 'Protocolos' },
  { id: routes.circuits, label: 'Circuitos' },
  { id: routes.procedures, label: 'Procedimientos' },
  { id: routes.calculations, label: 'Calculos' },
  { id: routes.sources, label: 'Fuentes' },
];

export const sectionIcons = {
  [routes.procedures]: Stethoscope,
  [routes.circuits]: Route,
};
