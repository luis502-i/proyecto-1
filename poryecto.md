# 🏦 Proyecto Semanal: Modelado de Entidades

**Dominio:** Sistema Bancario
**Lenguaje:** TypeScript

---

# 1. Descripción del Proyecto

Este proyecto consiste en modelar entidades de un **sistema bancario** utilizando **TypeScript**.
El objetivo es aplicar conceptos fundamentales como:

* Interfaces
* Type Unions
* Tipos Literales
* Funciones Tipadas
* Arrays Tipados

El sistema simula operaciones básicas de un banco como:

* Creación de cuentas
* Listado de cuentas
* Filtrado por estado

---

# 2. Entidades Principales

## Cliente (Client)

Representa a una persona registrada en el banco.

**Propiedades:**

| Propiedad | Tipo          | Descripción                     |
| --------- | ------------- | ------------------------------- |
| id        | number        | Identificador único del cliente |
| name      | string        | Nombre del cliente              |
| email     | string        | Correo electrónico              |
| status    | AccountStatus | Estado del cliente              |

---

## Cuenta Bancaria (BankAccount)

Representa una cuenta perteneciente a un cliente.

**Propiedades:**

| Propiedad     | Tipo          | Descripción                       |
| ------------- | ------------- | --------------------------------- |
| accountNumber | number        | Número de cuenta                  |
| clientId      | number        | ID del cliente dueño de la cuenta |
| balance       | number        | Saldo actual                      |
| type          | AccountType   | Tipo de cuenta                    |
| status        | AccountStatus | Estado de la cuenta               |

---

# 3. Tipos Personalizados

## Estado de Cuenta

Se utiliza un **Type Union** para limitar los estados posibles.

```ts
type AccountStatus = 'active' | 'inactive' | 'blocked'
```

**Descripción de estados**

| Estado   | Significado                   |
| -------- | ----------------------------- |
| active   | Cuenta activa                 |
| inactive | Cuenta temporalmente inactiva |
| blocked  | Cuenta bloqueada              |

---

## Tipo de Cuenta

Se utiliza un **Tipo Literal** para definir los tipos de cuentas permitidos.

```ts
type AccountType = 'ahorros' | 'corriente' | 'empresarial'
```

| Tipo        | Descripción                                  |
| ----------- | -------------------------------------------- |
| ahorros     | Cuenta de ahorro personal                    |
| corriente   | Cuenta corriente para movimientos frecuentes |
| empresarial | Cuenta para empresas                         |

---

# 4. Funciones del Sistema

## Crear Cuenta

Función que permite registrar una nueva cuenta bancaria.

```ts
function createAccount(): BankAccount
```

**Parámetros**

| Parámetro     | Tipo        |
| ------------- | ----------- |
| accountNumber | number      |
| clientId      | number      |
| balance       | number      |
| type          | AccountType |

**Retorna**

* Un objeto de tipo `BankAccount`

---

## Listar Cuentas

Devuelve todas las cuentas registradas en el sistema.

```ts
function listAccounts(): BankAccount[]
```

---

## Filtrar por Estado

Permite obtener cuentas según su estado.

```ts
function filterByStatus(status: AccountStatus): BankAccount[]
```

Ejemplo:

```ts
filterByStatus('active')
```

---

# 5. Ejemplo de Uso

Creación de cuentas:

```ts
createAccount(1001, 1, 5000, 'ahorros')
createAccount(1002, 2, 12000, 'corriente')
createAccount(1003, 3, 3000, 'empresarial')
```

Listar cuentas:

```ts
console.log(listAccounts())
```

Filtrar cuentas activas:

```ts
console.log(filterByStatus('active'))
```

---

# 6. Beneficios de usar TypeScript

✔ Mayor seguridad de tipos
✔ Prevención de errores en tiempo de compilación
✔ Código más mantenible
✔ Mejor organización del proyecto

---

# 7. Posibles Mejoras

El sistema puede ampliarse con funcionalidades como:

* Depósitos
* Retiros
* Transferencias entre cuentas
* Historial de transacciones
* Sistema de autenticación de usuarios
* API conectada a base de datos

---

# 8. Conclusión

Este proyecto demuestra cómo **TypeScript permite modelar entidades de manera clara y segura** dentro de un sistema bancario, utilizando herramientas modernas de tipado para mejorar la calidad del código.

