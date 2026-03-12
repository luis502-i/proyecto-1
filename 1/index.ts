// ============================================
// PROYECTO SEMANAL: MODELADO DE ENTIDADES
// ============================================

console.log('🏛️ PROYECTO SEMANAL: MODELADO DE ENTIDADES\n');

// INSTRUCCIONES:
// Adapta este archivo a tu dominio asignado (ej: biblioteca, farmacia, gimnasio, restaurante, etc.)
// Implementa las entidades, tipos y funciones siguiendo los TODOs y comentarios.
// Usa interfaces, types, type unions y literales. Comenta el código con qué/para/impacto.

// ============================================
// 1. Define las entidades principales de tu dominio
// ============================================

interface Client {
  id: number
  name: string
  email: string
  status: AccountStatus
}


interface BankAccount {
  accountNumber: number
  clientId: number
  balance: number
  type: AccountType
  status: AccountStatus
}


// ============================================
// 2. Usa type unions y literales para propiedades clave
// ============================================

type AccountStatus = 'active' | 'inactive' | 'blocked'

type AccountType = 'ahorros' | 'corriente' | 'empresarial'

// ============================================
// 3. Implementa funciones tipadas para operaciones básicas
// ============================================
const accounts: BankAccount[] = []

function createAccount(
  accountNumber: number,
  clientId: number,
  balance: number,
  type: AccountType
): BankAccount {
      
    const newAccount: BankAccount = {
    accountNumber,
    clientId,
    balance,
    type,
    status: 'active'
  }

  accounts.push(newAccount)

  return newAccount
}

function listAccounts(): BankAccount[] {
  return accounts
}

function filterByStatus(status: AccountStatus): BankAccount[] {
  return accounts.filter(account => account.status === status)
}
// ============================================
// 4. Prueba tus funciones con datos de ejemplo
// ============================================

createAccount(1001, 1, 5000, 'ahorros')
createAccount(1002, 2, 12000, 'corriente')
createAccount(1003, 3, 3000, 'empresarial')

accounts[1].status = 'inactive'
console.log('📋 Lista de cuentas:')
console.log(listAccounts())

console.log('\n✅ Cuentas activas:')
console.log(filterByStatus('active'))

console.log('\n⛔ Cuentas inactivas:')
console.log(filterByStatus('inactive'))

// ============================================
// 5. Comenta tu código explicando qué/para/impacto
// ============================================

// QUÉ: ...
// PARA: ...
// IMPACTO: ...

console.log('\n🚦 Recuerda: Adapta TODO a tu dominio y comenta tu código.');
