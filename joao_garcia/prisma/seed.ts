/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-explicit-any */

const { PrismaClient, Prisma } = require("@prisma/client");

const prismaClient = new PrismaClient();

const main = async () => {
  await prismaClient.$transaction(
    async (tx: any) => {
      // Limpar dados existentes
      await tx.contactInfo.deleteMany();
      await tx.landingPage.deleteMany();

      // Criar landing page
      const landingPage = await tx.landingPage.create({
        data: {
          name: "João Garcia",
          slug: "joaogarcia",
          description: "Capturando momentos reais com emoção e propósito.",
          avatarImageUrl:
            "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/logojoaogarcia.png",
          coverImageUrl:
            "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/coverjoaogarcia.jpg",
        },
      });

      // Criar contact info
      await tx.contactInfo.create({
        data: {
          email: "contato@joaogarciafotografia.com.br",
          phone: "(47) 99953-5245",
          whatsappLink: "https://wa.me/5547999535245",
          instagramLink: "https://www.instagram.com/joaogarciafotografia",
          facebookLink: "https://www.facebook.com/joaogarciafotografia",
          landingpageId: landingPage.id,
        },
      });

      return {
        landingPage,
      };
    },
    { timeout: 20000 },
  );

  console.log("📱 Seed de dados concluído com sucesso! 🎉");
};

main()
  .catch((e) => {
    console.error("Erro ao executar o seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });
