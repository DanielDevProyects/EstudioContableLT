export const site = {
  nombre: 'Estudio Contable LT',
  fundadora: 'Lourdes Tamara Rodriguez Garcia',
  matricula: 'C.P.N. M.P. 4.905',
  lema: 'Tu tranquilidad fiscal, nuestro trabajo.',
  descripcion:
    'Estudio contable integral: impuestos, sueldos, balances y asesoramiento para personas, monotributistas, pymes y empresas.',
  // Número en formato internacional, sin "+" ni espacios (ej. Argentina: 549 + código de área + número)
  whatsapp: '5493876471827',
  email: 'contacto@estudiolt.com',
  telefono: '3876 471827',
  direccion: '20 de Febrero 496, Of. D – Salta',
  horario: 'Lunes a viernes de 9 a 18 hs',
};

export const servicios = [
  { icono: '📊', titulo: 'Contabilidad y balances', texto: 'Registros contables al día, estados contables y balances para pymes y sociedades.' },
  { icono: '🧾', titulo: 'Impuestos', texto: 'Liquidación de IVA, Ganancias, Ingresos Brutos y planificación fiscal para pagar lo justo.' },
  { icono: '👥', titulo: 'Sueldos y cargas sociales', texto: 'Liquidación de haberes, altas y bajas de personal, F.931 y obligaciones laborales.' },
  { icono: '🧑‍💼', titulo: 'Monotributo y autónomos', texto: 'Inscripciones, recategorizaciones, facturación electrónica y regularización.' },
  { icono: '🏢', titulo: 'Sociedades y trámites', texto: 'Constitución de sociedades, habilitaciones, inscripciones y trámites ante organismos.' },
  { icono: '💡', titulo: 'Asesoramiento integral', texto: 'Análisis financiero, costos y acompañamiento para tomar mejores decisiones.' },
];

export const clientes = [
  { titulo: 'Personas y profesionales', texto: 'Monotributistas, autónomos y profesionales independientes.' },
  { titulo: 'Pymes y comercios', texto: 'Negocios en crecimiento que necesitan orden y previsibilidad.' },
  { titulo: 'Empresas y sociedades', texto: 'S.A., S.R.L. y otras sociedades con obligaciones complejas.' },
  { titulo: 'Emprendedores', texto: 'Ayuda para empezar: inscripción, facturación y primeros pasos.' },
];

export const trabajos = [
  { categoria: 'Pyme comercial', titulo: 'Regularización fiscal de comercio minorista', texto: 'Ordenamos 3 años de obligaciones pendientes y armamos un plan de pagos sostenible.', resultado: '−35% de carga fiscal' },
  { categoria: 'Sociedades', titulo: 'Constitución de S.R.L. y puesta en marcha', texto: 'Contrato social, inscripciones, sistema contable y facturación listos en pocas semanas.', resultado: 'Operativa en 30 días' },
  { categoria: 'Sueldos', titulo: 'Liquidación de sueldos para empresa de 40 empleados', texto: 'Implementamos un circuito mensual de liquidación sin errores ni demoras.', resultado: '0 reclamos laborales' },
  { categoria: 'Profesionales', titulo: 'Reencuadre de monotributo a régimen general', texto: 'Análisis de conveniencia y migración para un estudio de profesionales.', resultado: 'Ahorro anual significativo' },
  { categoria: 'Balances', titulo: 'Balances y auditoría para PyME industrial', texto: 'Estados contables certificados para presentar ante bancos y proveedores.', resultado: 'Acceso a crédito' },
  { categoria: 'Emprendedores', titulo: 'Acompañamiento a startup de servicios', texto: 'Estructura impositiva y contable adaptada a un negocio digital en expansión.', resultado: 'Crecimiento ordenado' },
];

export const numeros = [
  { valor: '+15', etiqueta: 'años de experiencia' },
  { valor: '+300', etiqueta: 'clientes asesorados' },
  { valor: '100%', etiqueta: 'compromiso con plazos' },
  { valor: '24 hs', etiqueta: 'respuesta a consultas' },
];

export function waLink(mensaje: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}
