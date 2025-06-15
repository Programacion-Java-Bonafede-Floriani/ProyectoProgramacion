document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
    nombre: e.target.nombre.value,
    documento: e.target.documento.value,
    correo: e.target.correo.value,
    direccion: e.target.direccion.value,
    localidad: e.target.localidad.value,
    provincia: e.target.provincia.value
  };

  const res = await fetch('http://localhost:3000/registro', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  });

  const result = await res.json();
  alert(result.message);
});

