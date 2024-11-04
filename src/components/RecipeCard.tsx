import React from 'react';
import { Clock, Users, ChefHat } from 'lucide-react';
import { Recipe } from '../types';

interface Props {
  recipe: Recipe;
  onClick: (recipe: Recipe) => void;
}

export function RecipeCard({ recipe, onClick }: Props) {
  const difficultyColor = {
    easy: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    hard: 'bg-red-100 text-red-800'
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={() => onClick(recipe)}
    >
      <div className="h-48 w-full overflow-hidden">
        <img 
          src={recipe.imageUrl} 
          alt={recipe.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{recipe.description}</p>
        
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{recipe.prepTime + recipe.cookTime} мин</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={16} />
            <span>{recipe.servings}</span>
          </div>
          <div className={`px-2 py-1 rounded-full text-xs ${difficultyColor[recipe.difficulty]}`}>
            <div className="flex items-center gap-1">
              <ChefHat size={14} />
              <span className="capitalize">{recipe.difficulty}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}