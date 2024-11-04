import { Recipe } from '../types';

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Борщ',
    description: 'Традиционный украинский борщ со сметаной',
    imageUrl: 'https://images.unsplash.com/photo-1607620962095-6096954ec8fc?auto=format&fit=crop&q=80&w=1600',
    prepTime: 30,
    cookTime: 120,
    servings: 6,
    difficulty: 'medium',
    category: 'супы',
    ingredients: [
      'Свекла - 2 шт',
      'Капуста - 300г',
      'Картофель - 3 шт',
      'Морковь - 1 шт',
      'Лук - 1 шт',
      'Говядина - 500г',
      'Томатная паста - 2 ст.л.',
      'Чеснок - 3 зубчика',
      'Сметана для подачи'
    ],
    instructions: [
      'Сварить мясной бульон',
      'Обжарить овощи',
      'Добавить нарезанную капусту и картофель',
      'Варить до готовности',
      'Добавить зажарку из свеклы',
      'Приправить по вкусу'
    ]
  },
  {
    id: '2',
    title: 'Оливье',
    description: 'Классический новогодний салат',
    imageUrl: 'https://images.unsplash.com/photo-1584278858536-52532423b9ea?auto=format&fit=crop&q=80&w=1600',
    prepTime: 40,
    cookTime: 0,
    servings: 8,
    difficulty: 'easy',
    category: 'салаты',
    ingredients: [
      'Картофель - 4 шт',
      'Морковь - 2 шт',
      'Яйца - 4 шт',
      'Колбаса - 300г',
      'Огурцы маринованные - 4 шт',
      'Горошек зеленый - 1 банка',
      'Майонез'
    ],
    instructions: [
      'Отварить овощи и яйца',
      'Нарезать все ингредиенты кубиками',
      'Смешать с горошком',
      'Заправить майонезом',
      'Охладить перед подачей'
    ]
  },
  {
    id: '3',
    title: 'Блины',
    description: 'Тонкие блины на молоке',
    imageUrl: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=1600',
    prepTime: 15,
    cookTime: 30,
    servings: 4,
    difficulty: 'easy',
    category: 'выпечка',
    ingredients: [
      'Мука - 200г',
      'Молоко - 500мл',
      'Яйца - 2 шт',
      'Сахар - 2 ст.л.',
      'Масло растительное - 2 ст.л.',
      'Соль - щепотка'
    ],
    instructions: [
      'Смешать все ингредиенты',
      'Взбить до однородности',
      'Жарить на разогретой сковороде',
      'Подавать с любимой начинкой'
    ]
  }
];