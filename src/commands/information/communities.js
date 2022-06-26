const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

const dataSet = [
  {
    name: 'Advocates for Youth',
    url: 'https://advocatesforyouth.org/',
    about:
      "This organization partners with youth leaders, adult allies, and youth-serving organizations to advocate for policies and champion programs that recognize young people's rights to honest sexual health information, affordable sexual health services, and the resources and opportunities to create sexual health equity for all youth."
  },
  {
    name: 'Equality Federation',
    url: 'https://www.equalityfederation.org/',
    about:
      'Equality Federation is the national alliance of State-based lesbian, gay, bisexual, transgender, and queer (LGBTQ) advocacy organizations.'
  },
  {
    name: 'Family Acceptance Project (FAP)',
    url: 'https://familyproject.sfsu.edu/',
    about:
      'FAP provides research-based educational materials and interventions to strengthen families and their support of their LGBT youth. Related goals include improving the health, mental health, and wellbeing of LGBT youth; helping create an environment in which LGBT youth can stay in their homes; and informing public policy.'
  },
  {
    name: 'Gender Spectrum',
    url: 'https://www.genderspectrum.org/',
    about:
      'Gender Spectrum provides education, training, and support to help create a gender-sensitive and inclusive environment for all children and teens. Gender Spectrum also offers a wide range of resources, training, and consultation to support schools to be more welcoming for all students, regardless of their gender.'
  },
  {
    name: 'The Trevor Project',
    url: 'https://www.thetrevorproject.org/',
    about:
      'The Trevor Project provides crisis intervention and suicide prevention services to young LGBTQ people under 25.'
  }
];

module.exports = {
  data: new SlashCommandBuilder()
    .setName('communities')
    .setDescription('Replies with LGBTQ+ related communities! 🏡'),
  async execute(interaction) {
    const embed = new MessageEmbed()
      .setColor('#51557E')
      .setAuthor({
        name: 'Communities 🏡',
        iconURL: 'https://i.imgur.com/PyReIVN.jpg',
        url: 'https://github.com/OctoplusNinja/Pride-Campus'
      })
      .setTitle('Advocacy and Support Organizations for LGBTQ+ Communities')
      .addFields(
        dataSet.map((data) => ({
          name: `[${data.name}](${data.url})`,
          value: data.about
        }))
      )
      .setDescription(
        'Information source: [Child Welfare Information Gateway](https://www.childwelfare.gov/organizations/?CWIGFunctionsaction=rols:main.dspList&rolType=Custom&RS_ID=146&rList=ROL)\nFollow the link above for more communities. Some are mentioned here:'
      );
    await interaction.reply({ embeds: [embed] });
  }
};
