export interface Nutricionista {
  id: string;
  name: string;
  firstName: string;
  gender: 'f' | 'm';
  specialty: string;
  crp: string;
  bio: string;
  photo: string;
  whatsappText: string;
}

export const nutricionistas: Nutricionista[] = [
  {
    id: 'isadora',
    name: 'Dra. Isadora Luiza',
    firstName: 'Isadora',
    gender: 'f',
    specialty: 'Composição Corporal e Longevidade',
    crp: 'CRN 36416',
    bio: 'Nutrição não é dieta — é entender o corpo e criar hábitos que funcionam. Com mais de 1.000 atendimentos, Isadora monta planos personalizados para composição corporal, hipertrofia e longevidade, respeitando sua rotina e objetivos.',
    photo: '/team/isadora.jpeg',
    whatsappText: 'Oi! Vi o perfil da Isadora Luiza no site e gostaria de saber mais sobre agendar com ela 😊'
  },
  // {
  //   id: 'ana',
  //   name: 'Ana Carolina Souza',
  //   firstName: 'Ana',
  //   gender: 'f',
  //   specialty: 'Emagrecimento Saudável',
  //   crp: 'CRN 03/123456',
  //   bio: 'Ana acredita que emagrecer não precisa ser sinônimo de sofrimento. Com uma abordagem baseada em evidências e respeito ao corpo, ela ajuda suas pacientes a encontrarem equilíbrio sem dietas malucas — focando em hábitos que cabem na vida real.',
  //   photo: '/team/anamoraes.jpeg',
  //   whatsappText: 'Oi! Vi o perfil da Ana Carolina Souza no site e gostaria de saber mais sobre agendar com ela 😊'
  // },
  // {
  //   id: 'rafael',
  //   name: 'Rafael Oliveira',
  //   firstName: 'Rafael',
  //   gender: 'm',
  //   specialty: 'Saúde Digestiva',
  //   crp: 'CRN 04/654321',
  //   bio: 'Rafael se especializou em saúde digestiva porque sabe que inchaço e desconforto afetam muito mais que o corpo — afetam a disposição, o humor e a qualidade de vida. Ele une ciência e empatia para ajudar você a se sentir leve de verdade.',
  //   photo: '/team/rafael.svg',
  //   whatsappText: 'Oi! Vi o perfil do Rafael Oliveira no site e gostaria de saber mais sobre agendar com ele 😊'
  // },
  // {
  //   id: 'camila',
  //   name: 'Camila Ferreira',
  //   firstName: 'Camila',
  //   gender: 'f',
  //   specialty: 'Reeducação Alimentar',
  //   crp: 'CRN 06/789012',
  //   bio: 'Camila já ajudou centenas de pessoas a quebrarem o ciclo do efeito sanfona. Seu método foca em reeducação alimentar sustentável — sem restrições extremas, sem culpa. O objetivo é que você aprenda a se alimentar bem para sempre, não por tempo limitado.',
  //   photo: '/team/camila.svg',
  //   whatsappText: 'Oi! Vi o perfil da Camila Ferreira no site e gostaria de saber mais sobre agendar com ela 😊'
  // },
  // {
  //   id: 'lucas',
  //   name: 'Lucas Mendes',
  //   firstName: 'Lucas',
  //   gender: 'm',
  //   specialty: 'Nutrição Esportiva',
  //   crp: 'CRN 01/345678',
  //   bio: 'Lucas entende que quem treina precisa de mais que "comer mais proteína". Ele monta planos personalizados que unem performance e prazer — porque alimento bom também pode ser gostoso e variado.',
  //   photo: '/team/marcos.svg',
  //   whatsappText: 'Oi! Vi o perfil do Lucas Mendes no site e gostaria de saber mais sobre agendar com ele 😊'
  // }
];
