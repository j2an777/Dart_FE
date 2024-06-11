import { Text } from '@/components';
import * as S from './styles';
import InItem1 from '@/assets/images/introduceItem1.png';
import InItem2 from '@/assets/images/introduceItem2.png';
import InItem3 from '@/assets/images/introduceItem3.png';
import { motion } from 'framer-motion';

const Introduce = () => {
  return (
    <S.Container>
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{
                ease: 'easeInOut',
                duration: 0.5,
                x: { duration: 1}
            }}>
            <S.IntroduceBox>
                <Text typography='t0' color='white' bold='bold' className='title'>
                    D'<span>art</span>
                    <br/>
                    GALLERY
                </Text>
                <Text typography='t2' color='white' bold='semibold'>"예술의 공유, 전시의 즐거움"</Text>
                <S.IntroduceBlock>
                    <Text typography='t2' className='demoTitle' bold='medium'>전시 <span>&nbsp;모두가 즐기는 전시</span></Text>
                    <Text typography='t4' bold='thin' color='gray100'>
                        사용자 모두 전시를 열 수 있습니다.
                        <br/>
                        자신의 작품을 자유롭게 보여줄
                        <br/>
                        기회를 제공합니다.
                    </Text>
                </S.IntroduceBlock>
            </S.IntroduceBox>
        </motion.div>
        <S.DemoBox>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                    ease: 'easeInOut',
                    duration: 1,
                    x: { duration: 1}
                }}>
                <img src={InItem1} alt='소개 이미지1' />
            </motion.div>
            <S.DemoBlock>
                <Text typography='t4' color='white' bold='semibold'>
                    D'<span>art</span>
                    <br/>
                    GALLERY
                </Text>
            </S.DemoBlock>
        </S.DemoBox>
        <S.AddBox>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{
                    ease: 'easeInOut',
                    duration: 1,
                    x: { duration: 1}
            }}>
                <img src={InItem2} alt='소개 이미지2' />
            </motion.div>
            <S.AddBlock>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 1,
                        x: { duration: 1}
                }}>
                <Text typography='t2' bold='semibold'>
                    관람
                    <span>시간 장소에 제약없는 관람</span>
                </Text>
                <Text typography='t4' bold='thin'>
                    언제 어디서나 전시를
                    <br/>
                    즐기세요. 주어진 개최
                    <br/>
                    기간 내 관람이 가능합니다.
                </Text>
                </motion.div>
            </S.AddBlock>
        </S.AddBox>
        <S.AddBox>
            <S.AddBlock>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 1,
                        x: { duration: 1}
                }}>
                <Text typography='t2' bold='semibold' style={{ textAlign: 'right' }}>
                    소통
                    <span>작가, 관객과 소통하며 즐기는 시간</span>
                </Text>
                <Text typography='t4' bold='thin' style={{ textAlign: 'right' }}>
                    전시를 보며 실시간 채팅을
                    <br/>
                    할 수 있습니다. 자유롭게
                    <br/>
                    대화를 나눠보세요.
                </Text>
                </motion.div>
            </S.AddBlock>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{
                    ease: 'easeInOut',
                    duration: 1,
                    x: { duration: 1}
            }}>
                <img src={InItem3} alt='소개 이미지3' />
            </motion.div>
        </S.AddBox>
    </S.Container>
  )
}

export default Introduce