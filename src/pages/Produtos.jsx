import React, { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [form, setForm] = useState({
    id: "",
    name: "",
    price: "",
    category: "",
    description: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.price) return;

    if (form.id) {
      setProdutos((prev) =>
        prev.map((p) => (p.id === form.id ? form : p))
      );
    } else {
      setProdutos((prev) => [
        ...prev,
        { ...form, id: Date.now().toString() },
      ]);
    }

    setForm({
      id: "",
      name: "",
      price: "",
      category: "",
      description: "",
    });
  }

  function handleEdit(prod) {
    setForm(prod);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleDelete(id) {
    if (window.confirm("Excluir este produto?")) {
      setProdutos((prev) => prev.filter((p) => p.id !== id));
    }
  }

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Gerenciar Produtos</h1>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white p-4 shadow rounded"
      >
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Nome"
          className="border p-2 rounded"
          required
        />
        <input
          name="price"
          value={form.price}
          onChange={handleChange}
          type="number"
          step="0.01"
          placeholder="Preço"
          className="border p-2 rounded"
          required
        />
        <input
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Categoria"
          className="border p-2 rounded"
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Descrição"
          className="border p-2 rounded md:col-span-3"
        ></textarea>

        <div className="md:col-span-3 flex gap-3">
          <button
            type="submit"
            className="bg-indigo-600 text-white p-2 rounded"
          >
            {form.id ? "Atualizar" : "Adicionar"}
          </button>
          <button
            type="button"
            onClick={() =>
              setForm({
                id: "",
                name: "",
                price: "",
                category: "",
                description: "",
              })
            }
            className="border p-2 rounded"
          >
            Limpar
          </button>
        </div>
      </form>

      <table className="w-full border-collapse bg-white shadow rounded overflow-hidden">
        <thead className="bg-indigo-100">
          <tr>
            <th className="border p-2">Nome</th>
            <th className="border p-2">Preço</th>
            <th className="border p-2">Categoria</th>
            <th className="border p-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {produtos.length === 0 && (
            <tr>
              <td colSpan="4" className="p-4 text-gray-500">
                Nenhum produto cadastrado
              </td>
            </tr>
          )}
          {produtos.map((p) => (
            <tr key={p.id} className="text-center">
              <td className="border p-2">{p.name}</td>
              <td className="border p-2">
                R$ {Number(p.price).toFixed(2)}
              </td>
              <td className="border p-2">{p.category}</td>
              <td className="border p-2 flex justify-center gap-2">
                <button
                  onClick={() => handleEdit(p)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <Pencil size={18} />
                </button>
                <button
                  onClick={() => handleDelete(p.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
