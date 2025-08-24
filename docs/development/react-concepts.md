# React Concepts Guide

## 🎯 Core React Concepts

### 1. Controlled Components

**What it is:** React controls the value of input fields through state.

**Syntax:**

```typescript
const [value, setValue] = useState('')

<input
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>
```

**How it works:**

- `value={value}` - displays the current value from state
- `onChange` - updates the state on every change
- React re-renders the component with the new value

### 2. Spread Operator (`...`)

**What it is:** Creates a new object/array by copying existing elements.

**Syntax:**

```typescript
const oldData = {email: 'old@email.com', password: '123'}
const newData = {...oldData, email: 'new@email.com'}
// Result: { email: 'new@email.com', password: '123' }
```

**In forms:**

```typescript
onChange={e => setFormData({...formData, email: e.target.value})}
```

### 3. Event Handling

**Forms:**

```typescript
const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault() // Prevents default form submission
}
```

**Buttons:**

```typescript
<button onClick={handleClick}>Click me</button>
```

### 4. Conditional Rendering

**Syntax:**

```typescript
{condition && <Component />}
{condition ? <ComponentA /> : <ComponentB />}
```

**Examples:**

```typescript
{error && <p style={{color: 'red'}}>Error: {error}</p>}
{loading ? 'Loading...' : 'Submit'}
```

### 5. Form Handling

**Structure:**

```typescript
<form onSubmit={handleSubmit}>
    <input
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        required
    />
    <button type="submit">Submit</button>
</form>
```

**Key points:**

- `onSubmit` - called when form is submitted
- `e.preventDefault()` - prevents page reload
- `required` - HTML validation
- `type="submit"` - submit button

### 6. Async/Await in React

**Structure:**

```typescript
const handleSubmit = async (e: React.FormEvent) => {
    try {
        const response = await fetch(url, options)
        const data = await response.json()
        // Handle success
    } catch (error) {
        // Handle error
    } finally {
        // Always executes
    }
}
```

### 7. State Management

**Multiple state:**

```typescript
const [formData, setFormData] = useState({email: '', password: ''})
const [loading, setLoading] = useState(false)
const [error, setError] = useState('')
```

**State updates:**

```typescript
setFormData({...formData, email: newValue}) // Update object
setLoading(true) // Update primitive
```

---

## 📚 Common Patterns

### Form Pattern:

1. Create state for the form
2. Create submit handler function
3. Bind state to input fields
4. Handle server response

### Loading Pattern:

1. `setLoading(true)` - start operation
2. Execute operation
3. `setLoading(false)` - end operation (in finally)

### Error Pattern:

1. `setError('')` - clear errors
2. `try/catch` - catch errors
3. `setError(message)` - show error to user

---

**Last Updated:** 2025-01-19
