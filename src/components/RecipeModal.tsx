import React from 'react';
import { X, Clock, Users } from 'lucide-react';
import { Recipe } from '../types';

interface Props {
  recipe: Recipe;
  onClose: () => void;
}

export function RecipeModal({ recipe, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative h-64 w-full">
          <img 
            src={recipe.imageUrl} 
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-2">{recipe.title}</h2>
          <p className="text-gray-600 mb-6">{recipe.description}</p>
          
          <div className="flex gap-6 mb-6">
            <div className="flex items-center gap-2">
              <Clock size={20} />
              <div>
                <p className="text-sm text-gray-500">Время приготовления</p>
                <p className="font-medium">{recipe.prepTime + recipe.cookTime} мин</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users size={20} />
              <div>
                <p className="text-sm text-gray-500">Порций</p>
                <p className="font-medium">{recipe.servings}</p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Ингредиенты</h3>
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Инструкция</h3>
              <ol className="space-y-4">
                {recipe.instructions.map((step, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-medium">
                      {index + 1}
                    </span>
                    <p>{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}