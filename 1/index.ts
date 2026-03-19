// ============================================
// PROYECTO SEMANAL: MODELADO DE ENTIDADES
// DOMINIO: BANCO
// ============================================

// ============================================
// 1. Definición de entidades principales
// ============================================

// QUÉ: Representa un cliente del banco
// PARA: Guardar información básica del usuario
// IMPACTO: Permite relacionar clientes con cuentas bancarias
//interface Client {
  //id: number
  //name: string
  //email: string
  //status: AccountStatus
//}

// QUÉ: Representa una cuenta bancaria
// PARA: Gestionar dinero, tipo de cuenta y estado
// IMPACTO: Permite operaciones como crear, listar y filtrar cuentas
//interface BankAccount {
  //accountNumber: number
  //clientId: number
  //balance: number
  //type: AccountType
  //status: AccountStatus
//}

// ============================================
// 2. Type unions y literales
// ============================================

// QUÉ: Define los posibles estados de una cuenta
// PARA: Evitar errores de valores inválidos
// IMPACTO: Mejora la seguridad del sistema
//type AccountStatus = 'active' | 'inactive' | 'blocked'

// QUÉ: Define los tipos de cuentas disponibles
// PARA: Clasificar las cuentas
// IMPACTO: Permite lógica según el tipo de cuenta
//type AccountType = 'ahorros' | 'corriente' | 'empresarial'

// ============================================
// 3. Funciones del sistema bancario
// ============================================

// Base de datos simulada en memoria
//const accounts: BankAccount[] = []

// QUÉ: Crear una nueva cuenta bancaria
// PARA: Registrar nuevas cuentas en el sistema
// IMPACTO: Permite crecer la base de clientes
//function createAccount(
  //accountNumber: number,
  //clientId: number,
  //balance: number,
  //type: AccountType
//): BankAccount {

  //const newAccount: BankAccount = {
    //accountNumber,
    //clientId,
    //balance,
    //type,
    //status: 'active'
  //}

  //accounts.push(newAccount)

  //return newAccount
//}

// QUÉ: Listar todas las cuentas
// PARA: Visualizar la información almacenada
// IMPACTO: Facilita auditoría y control
//function listAccounts(): BankAccount[] {
  //return accounts
//}

// QUÉ: Filtrar cuentas por estado
// PARA: Consultar cuentas activas, inactivas o bloqueadas
// IMPACTO: Ayuda en gestión y toma de decisiones
//function filterByStatus(status: AccountStatus): BankAccount[] {
  //return accounts.filter(account => account.status === status)
//}

// ============================================
// 4. Pruebas del sistema
// ============================================

// Creación de cuentas
//createAccount(1001, 1, 5000, 'ahorros')
//createAccount(1002, 2, 12000, 'corriente')
//createAccount(1003, 3, 3000, 'empresarial')

// Cambiar estado de una cuenta
//accounts[1].status = 'inactive'

// Mostrar resultados
//console.log('📋 Lista de cuentas:')
//console.log(listAccounts())

//console.log('\n✅ Cuentas activas:')
//console.log(filterByStatus('active'))

//console.log('\n⛔ Cuentas inactivas:')
//console.log(filterByStatus('inactive'))

// ============================================
// 5. Reflexión final
// ============================================

// QUÉ: Se modeló un sistema básico de cuentas bancarias usando TypeScript
// PARA: Aplicar conceptos como interfaces, tipos y funciones tipadas
// IMPACTO: Permite crear sistemas más seguros, escalables y fáciles de mantener

//console.log('\n🚦 Sistema listo y funcionando correctamente');
