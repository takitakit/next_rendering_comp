// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Article[]>
) {

  const start = (new Date()).getTime()
  while ((new Date()).getTime() - start < 5000) {}

  res.status(200).json([
    {
        title: 'Article1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum rutrum consectetur. Sed efficitur sodales ornare. Nam id risus massa. Suspendisse vel nisi nec velit sollicitudin varius. Pellentesque auctor id justo sit amet viverra. Integer eu orci nec purus vehicula maximus et eu sem. Cras gravida, enim vel scelerisque porttitor, turpis urna vulputate risus, ac ornare sem neque eu arcu. Proin condimentum, lacus eget aliquam suscipit, turpis mauris vehicula urna, tempor ornare lacus enim quis nisi. Donec ut aliquam quam. In feugiat faucibus orci, vitae dignissim arcu elementum et. Curabitur cursus in diam vel varius. Vivamus condimentum pharetra ante et varius.',
    },
    {
        title: 'Article2',
        content: 'Aenean et viverra nulla. Proin vestibulum sagittis tempor. Donec ut rhoncus dui. Etiam suscipit lacus nec facilisis placerat. Praesent sapien augue, consequat ac nunc a, vehicula iaculis ligula. Maecenas lorem libero, sollicitudin vel laoreet suscipit, cursus ac turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque consequat, neque sed semper pretium, lacus enim pharetra eros, sed porttitor ante massa vitae lorem. Proin in congue odio. Quisque rhoncus nulla sit amet varius facilisis. Nunc tincidunt massa id turpis ultrices gravida.',
    },
    {
        title: 'Article3',
        content: 'Sed bibendum, est sed tempor tristique, eros turpis fringilla massa, a vulputate nisl nibh ut justo. Praesent ultricies, est sed fermentum volutpat, arcu lectus vehicula turpis, at aliquet tellus nunc pulvinar felis. Aenean urna erat, molestie nec turpis eget, vulputate mollis risus. Suspendisse facilisis maximus lectus, eu dignissim massa consequat quis. Nunc at dolor sed lorem elementum blandit ut eget elit. Quisque lacinia ut felis at tristique. Phasellus enim tellus, lobortis ac pharetra eu, dignissim ut massa. Ut interdum gravida magna, a ullamcorper felis volutpat sit amet. Etiam vitae lorem a turpis volutpat gravida non ut mi. Vestibulum non mauris sed lorem pharetra iaculis.',
    },
  ])
}
