mt5_path = "/home/doanhlee/Projects/ThesisProject/uni-sign/pretrained_weight/mt5-base"

# label paths
train_label_paths = {
                    "MS-ASL": "/kaggle/input/ms-asl/MS-ASL/MSASL_train.json",
                    "WLASL": "/kaggle/input/wl-asl/WLASL/train_labels.train"
                    }

dev_label_paths = {
    "MS-ASL": "/kaggle/input/ms-asl/MS-ASL/MSASL_val.json",
    "WLASL": "/kaggle/input/wl-asl/WLASL/val_labels.dev"
}

test_label_paths = {
                    "MS-ASL": "/kaggle/input/wl-asl/WLASL/MSASL_test.json",
                    "WLASL": "/kaggle/input/wl-asl/WLASL/test_labels.test"
                    }


# video paths
rgb_dirs = {
            "MS-ASL": "/kaggle/input/ms-asl/MS-ASL/MSASL_test.json/rgb_format",
            "WLASL": "/kaggle/input/wl-asl/WLASL/rgb_format"
            }

# pose paths
pose_dirs = {
            "MS-ASL": "/kaggle/input/wl-asl/WLASL/pose_format",
            "WLASL": "/kaggle/input/wl-asl/WLASL/pose_format"
            }
