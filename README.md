<h3 align="center"><a href="" style="color:#9C276A">
Uni-Sign: Toward Unified Sign Language Understanding at Scale</a></h3>
<h5 align="center"> 
If our project helps you, please give us a star🌟 on GitHub, that would motivate us a lot!
</h2>

<h5 align="center">

[![arXiv](https://img.shields.io/badge/Arxiv-2501.15187-AD1C18.svg?logo=arXiv)](https://arxiv.org/abs/2501.15187) 
[![CSL-Dataset](https://img.shields.io/badge/HuggingFace🤗-%20CSL%20News-blue.svg)](https://huggingface.co/datasets/ZechengLi19/CSL-News)
[![CSL-Dataset](https://img.shields.io/badge/BaiDu☁-%20CSL%20News-green.svg)](https://pan.baidu.com/s/17W6kIreNMHYtD4y2llKmDg?pwd=ncvo) 

[![PWC](https://img.shields.io/endpoint.svg?url=https://paperswithcode.com/badge/uni-sign-toward-unified-sign-language/sign-language-recognition-on-ms-asl)](https://paperswithcode.com/sota/sign-language-recognition-on-ms-asl?p=uni-sign-toward-unified-sign-language)
[![PWC](https://img.shields.io/endpoint.svg?url=https://paperswithcode.com/badge/uni-sign-toward-unified-sign-language/sign-language-recognition-on-wlasl100)](https://paperswithcode.com/sota/sign-language-recognition-on-wlasl100?p=uni-sign-toward-unified-sign-language)
[![PWC](https://img.shields.io/endpoint.svg?url=https://paperswithcode.com/badge/uni-sign-toward-unified-sign-language/sign-language-recognition-on-wlasl-2000)](https://paperswithcode.com/sota/sign-language-recognition-on-wlasl-2000?p=uni-sign-toward-unified-sign-language)
[![PWC](https://img.shields.io/endpoint.svg?url=https://paperswithcode.com/badge/uni-sign-toward-unified-sign-language/sign-language-recognition-on-csl-daily)](https://paperswithcode.com/sota/sign-language-recognition-on-csl-daily?p=uni-sign-toward-unified-sign-language)
[![PWC](https://img.shields.io/endpoint.svg?url=https://paperswithcode.com/badge/uni-sign-toward-unified-sign-language/gloss-free-sign-language-translation-on-csl)](https://paperswithcode.com/sota/gloss-free-sign-language-translation-on-csl?p=uni-sign-toward-unified-sign-language)
[![PWC](https://img.shields.io/endpoint.svg?url=https://paperswithcode.com/badge/uni-sign-toward-unified-sign-language/gloss-free-sign-language-translation-on-2)](https://paperswithcode.com/sota/gloss-free-sign-language-translation-on-2?p=uni-sign-toward-unified-sign-language)
[![PWC](https://img.shields.io/endpoint.svg?url=https://paperswithcode.com/badge/uni-sign-toward-unified-sign-language/gloss-free-sign-language-translation-on-3)](https://paperswithcode.com/sota/gloss-free-sign-language-translation-on-3?p=uni-sign-toward-unified-sign-language)
</h5>

![Uni-Sign](docs/framework.png)

## 💥 News
[2025/1/25] This [paper](https://openreview.net/pdf?id=0Xt7uT04cQ) is accepted by `ICLR 2025` 🎉🎉!

[2025/2/24] Release CSL-News dataset and code implementation.

## 🛠️ Installation
We suggest to create a new conda environment. 
```bash
# create environment
conda create --name Uni-Sign python=3.9
conda activate Uni-Sign
# install other relevant dependencies
pip install -r requirements.txt
```

## 📖 Preparation
Please follow the instructions provided in [DATASET.md](./docs/DATASET.md) for data preparation.

## 🔨 Training & Evaluation
All scripts must be executed within the Uni-Sign directory.
### Training
**Stage 1**: pose-only pre-training.
```bash
bash ./script/train_stage1.sh
```
**Stage 2**: RGB-pose pre-training.
```bash
bash ./script/train_stage2.sh
```
**Stage 3**: downstream fine-tuning.
```bash
bash ./script/train_stage3.sh
```

### Evaluation
After completing stage 3 fine-tuning, performance evaluation on a single GPU can be performed using the following command:
```bash
bash ./script/eval_stage3.sh
```

## 👨‍💻 Todo
- [x] Release CSL-News dataset
- [x] Release Uni-Sign implementation 

