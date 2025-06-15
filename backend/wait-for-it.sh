#!/usr/bin/env bash

host="$1"
port="$2"
shift 2

echo "⏳ Esperando a que $host:$port esté disponible..."
until nc -z "$host" "$port"; do
  sleep 1
done

echo "✅ $host:$port está listo. Ejecutando aplicación..."
exec "$@"
